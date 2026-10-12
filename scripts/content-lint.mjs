#!/usr/bin/env node
// Content lint: scans blog article and FAQ content only. Runs from "prebuild".
// Allowlist: content-lint.allow.json entries {file, pattern, contains, reason}
//   file     - repo-relative path of the scanned file
//   pattern  - rule id (e.g. "self-claim"), or "*" for any rule
//   contains - short exact substring of the allowed line
//   reason   - why it is allowed (required)
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const FILES = [
  "src/lib/blog.ts",
  "src/app/blog/[slug]/page.tsx",
  "src/lib/faq.ts",
];

const RULES = [
  // a. Self-claims about our directory or listings
  { id: "self-claim", re: /verified (dealer|provider|listing|directory)s?/i },
  { id: "self-claim", re: /\bwe (verify|vet|screen)\b/i },
  { id: "self-claim", re: /\bvetted\b/i },
  { id: "self-claim", re: /\b(trusted|top-rated) (dealer|provider|shop|specialist)s?/i },
  // b. Dead CTA reference
  { id: "directory-below", re: /directory below/i },
  // c. Markdown tables
  { id: "md-table", re: /^\s*\|.*\|\s*$/ },
  // d. Emphasis inside link text
  { id: "link-emphasis", re: /\[[^\]]*[*_][^\]]*\]\(/ },
  // e. Site-specific: IRS does not approve bullion, depositories, or custodians
  { id: "irs-approved", re: /IRS[- ]?(approved|authorized|certified|qualified)/i },
];

const allowPath = join(ROOT, "content-lint.allow.json");
const allow = existsSync(allowPath) ? JSON.parse(readFileSync(allowPath, "utf8")) : [];
for (const e of allow) {
  if (!e.file || !e.pattern || !e.contains || !e.reason) {
    console.error(`content-lint: malformed allowlist entry (needs file, pattern, contains, reason): ${JSON.stringify(e)}`);
    process.exit(1);
  }
}

const isAllowed = (file, rule, line) =>
  allow.some(
    (e) => e.file === file && (e.pattern === rule || e.pattern === "*") && line.includes(e.contains),
  );

let hits = 0;
for (const file of FILES) {
  const lines = readFileSync(join(ROOT, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const { id, re } of RULES) {
      if (re.test(line) && !isAllowed(file, id, line)) {
        hits++;
        console.error(`${file}:${i + 1} [${id}] ${line.trim().slice(0, 240)}`);
      }
    }
  });
}

// Internal /blog/<slug> links in FAQ and article content must resolve to a slug in blog.ts
const blogSrc = readFileSync(join(ROOT, "src/lib/blog.ts"), "utf8");
const slugs = new Set([...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
for (const file of ["src/lib/faq.ts", "src/app/blog/[slug]/page.tsx"]) {
  const lines = readFileSync(join(ROOT, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/(?<=["'(`])\/blog\/([a-z0-9][a-z0-9-]*)(?=["'#?/)\s`])/g)) {
      if (!slugs.has(m[1]) && !isAllowed(file, "dead-blog-link", line)) {
        hits++;
        console.error(`${file}:${i + 1} [dead-blog-link] /blog/${m[1]} is not a slug in src/lib/blog.ts`);
      }
    }
  });
}

if (hits) {
  console.error(`\ncontent-lint: ${hits} hit(s). Fix the content, or add a justified entry to content-lint.allow.json.`);
  process.exit(1);
}
console.log("content-lint: clean");
