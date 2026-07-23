import { NextResponse } from "next/server";

// Lead-capture endpoint for silvergoldinsights.com (Tory Aggeler contact survey).
// Receives the visitor's contact info + survey answers and emails Tory.
//
// Sending is handled by Resend when RESEND_API_KEY is set. In local dev with no
// key, the composed email is logged to the console instead of sent, so the whole
// flow is testable without any account. See .env.example for the env vars.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = process.env.LEAD_TO_EMAIL || "tory@mcalvany.com";
// From must be an address on a Resend-verified domain. thegoldwindow.ai is verified;
// swap to leads@silvergoldinsights.com once that domain is moved to Cloudflare + verified.
const FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL || "Silver Gold Insights <leads@thegoldwindow.ai>";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string; // survey step 1
  amount?: string; // survey step 2
  timeline?: string; // survey step 3
  message?: string;
  company?: string; // honeypot — real users never fill this
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 500): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const goal = clean(body.goal, 120);
  const amount = clean(body.amount, 120);
  const timeline = clean(body.timeline, 120);
  const message = clean(body.message, 2000);

  // Need a name and at least one way to reach them.
  if (!name || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: "Please include your name and an email or phone number." },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const subject = `New lead from silvergoldinsights.com — ${name}`;
  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email || "—"],
    ["Phone", phone || "—"],
    ["Goal", goal || "—"],
    ["Investment size", amount || "—"],
    ["Timeline", timeline || "—"],
    ["Message", message || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;max-width:560px">
      <h2 style="margin:0 0 4px">New consultation request</h2>
      <p style="margin:0 0 16px;color:#666">Submitted via silvergoldinsights.com</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #eee;background:#faf9f6;font-weight:600;white-space:nowrap">${k}</td>
                 <td style="padding:8px 12px;border:1px solid #eee">${escapeHtml(v)}</td>
               </tr>`
          )
          .join("")}
      </table>
    </div>`;

  const apiKey = process.env.RESEND_API_KEY;

  // Local/dev fallback: no key configured -> log instead of send so the flow is testable.
  if (!apiKey) {
    console.log(
      `[lead] (no RESEND_API_KEY — not sent) to=${TO_EMAIL} replyTo=${email || "n/a"}\n${text}`
    );
    return NextResponse.json({ ok: true, delivered: false, dev: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      text,
      html,
      ...(email ? { replyTo: email } : {}),
    });
    if (error) {
      console.error("[lead] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please call Tory directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please call Tory directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
