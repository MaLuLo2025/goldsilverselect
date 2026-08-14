// COMEX gold/silver futures trading hours, anchored to America/New_York
// regardless of server/client local timezone.
//
// Trading week: Sunday 6:00 PM ET through Friday 5:00 PM ET, with a daily
// 60-minute pause from 5:00 PM to 6:00 PM ET on each trading day (Mon–Thu;
// Friday's 5:00 PM close is the end of the week, not a same-day pause).

const TIME_ZONE = "America/New_York";
const DOW_ABBREV = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKDAY_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

interface ETParts {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  dow: number;
}

function getETParts(date: Date): ETParts {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hourCycle: "h23",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(date)) parts[p.type] = p.value;
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
    dow: WEEKDAY_TO_INDEX[parts.weekday],
  };
}

// Offset (minutes) between a UTC instant and its America/New_York wall-clock
// reading, derived by re-interpreting the formatted local time as if it were
// itself UTC and diffing against the real instant. Used to convert a target
// ET wall-clock time back into a real Date instant, correctly across DST.
function etOffsetMinutesAt(utcGuess: Date): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(utcGuess)) parts[p.type] = p.value;
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );
  return (asUTC - utcGuess.getTime()) / 60000;
}

function makeETDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): Date {
  const guess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const offsetMin = etOffsetMinutesAt(guess);
  return new Date(guess.getTime() - offsetMin * 60000);
}

/** True if COMEX metals trading is open at the given instant. */
export function isMarketOpen(date: Date): boolean {
  const { dow, hour, minute } = getETParts(date);
  const totalMin = hour * 60 + minute;

  if (dow === 6) return false; // Saturday: always closed
  if (dow === 0) return totalMin >= 18 * 60; // Sunday: opens 6:00 PM
  if (dow === 5) return totalMin < 17 * 60; // Friday: closes 5:00 PM

  // Mon–Thu: closed only during the 5:00–6:00 PM daily pause
  return !(totalMin >= 17 * 60 && totalMin < 18 * 60);
}

/**
 * The next instant the market opens, given it is currently closed at `date`.
 * (Behavior is only meaningful when isMarketOpen(date) is false.)
 */
export function getNextMarketOpen(date: Date): Date {
  const { year, month, day, dow, hour, minute } = getETParts(date);
  const totalMin = hour * 60 + minute;

  // Mon–Thu daily pause → reopens the same day at 6:00 PM
  if (dow >= 1 && dow <= 4 && totalMin >= 17 * 60 && totalMin < 18 * 60) {
    return makeETDate(year, month, day, 18, 0);
  }

  // Sunday before 6:00 PM → opens later the same day at 6:00 PM
  if (dow === 0 && totalMin < 18 * 60) {
    return makeETDate(year, month, day, 18, 0);
  }

  // Friday evening or Saturday (or any other closed state) → next Sunday 6:00 PM
  const daysUntilSunday = dow === 0 ? 7 : 7 - dow;
  const midnightToday = makeETDate(year, month, day, 0, 0);
  const roughlyNextSunday = new Date(
    midnightToday.getTime() + daysUntilSunday * 86400000
  );
  // Re-derive the ET calendar date from that instant (guards against any
  // hour drift from a DST transition crossed during the addition above),
  // then pin the time to exactly 6:00 PM ET.
  const sunday = getETParts(roughlyNextSunday);
  return makeETDate(sunday.year, sunday.month, sunday.day, 18, 0);
}

function formatShortTime(hour24: number, minute: number): string {
  const period = hour24 >= 12 ? "pm" : "am";
  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;
  return minute === 0
    ? `${hour12}${period}`
    : `${hour12}:${String(minute).padStart(2, "0")}${period}`;
}

/**
 * Short label for the next market open, relative to `from`. Same-day
 * Mon–Thu pause reopenings render bare ("6pm"); every other closed state
 * (Friday evening, Saturday, Sunday before 6pm, or further out) is prefixed
 * with the day abbreviation ("Sun 6pm").
 */
export function formatNextOpen(nextOpen: Date, from: Date): string {
  const fromParts = getETParts(from);
  const openParts = getETParts(nextOpen);
  const time = formatShortTime(openParts.hour, openParts.minute);

  const fromTotalMin = fromParts.hour * 60 + fromParts.minute;
  const isDailyPause =
    fromParts.dow >= 1 &&
    fromParts.dow <= 4 &&
    fromTotalMin >= 17 * 60 &&
    fromTotalMin < 18 * 60;

  return isDailyPause ? time : `${DOW_ABBREV[openParts.dow]} ${time}`;
}
