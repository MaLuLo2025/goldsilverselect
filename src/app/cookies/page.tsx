import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "GoldSilverSelect cookie policy — what cookies we use, why, and how to manage them.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl font-bold text-forest mb-2">Cookie Policy</h1>
        <p className="font-sans text-sm mb-10" style={{ color: "#888" }}>
          Effective Date: August 16, 2026
        </p>

        <Section title="1. What Are Cookies">
          Cookies are small text files placed on your device when you visit a website. Some of
          what we describe below is stored as a cookie; some is stored using your browser&apos;s
          local storage instead of a cookie. We say which is which below.
        </Section>

        <Section title="2. How We Use Cookies and Local Storage">
          <p className="mb-4">GoldSilverSelect uses two categories:</p>

          <h3 className="font-serif font-semibold text-forest mb-1.5">Essential</h3>
          <p className="mb-4">
            Required for the website to function — for example, remembering your cookie consent
            choice so we don&apos;t ask you again every visit, and basic security and navigation.
            These cannot be disabled.
          </p>

          <h3 className="font-serif font-semibold text-forest mb-1.5">Analytics</h3>
          <p>
            Controls whether Google Analytics 4 is allowed to measure your visit. When this is
            on, Google Analytics sets cookies named <code>_ga</code> and <code>_ga_*</code> to
            distinguish visitors and sessions, and we use the resulting data to understand how
            the site is used and improve it. When this is off, those cookies are not set. See
            &quot;Google Analytics&quot; below for full detail.
          </p>
        </Section>

        <Section title="3. How Your Consent Choice Is Stored">
          Your Essential/Analytics choices are stored in your browser&apos;s local storage (not a
          cookie), under the keys <code>cookie_consent</code> and <code>cookie_prefs</code>.
          Local storage isn&apos;t cleared on any fixed schedule — it persists until you clear
          your browser&apos;s site data for this domain, or until you change your preferences
          again through Cookie Preferences, described below.
        </Section>

        <Section title="4. Google Analytics">
          <p className="mb-4">
            We use Google Analytics 4, which operates under Google&apos;s Consent Mode.
            Specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-4">
            <li>
              Analytics cookies (<code>_ga</code>, <code>_ga_*</code>) are{" "}
              <strong>not set</strong> unless you grant Analytics consent, either by clicking
              &quot;Accept&quot; or by turning on Analytics in Cookie Preferences.
            </li>
            <li>
              If you later turn Analytics off, any Analytics cookies already on your device are{" "}
              <strong>actively deleted</strong>, not just left to expire.
            </li>
          </ul>
          <p className="mb-4">
            When Analytics consent is denied, Google&apos;s tag may still send a limited,
            anonymized signal to Google for basic aggregate measurement. This signal does not
            include a cookie and does not include any identifier that persists across visits or
            links back to you individually. It is not the same as the tracking that happens once
            you grant consent, and we do not use it to build a profile of you.
          </p>
          <p>
            Google&apos;s own use of this data is governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              className="underline text-forest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="5. Managing Your Preferences">
          <p className="mb-4">
            You can change or withdraw your consent at any time using the{" "}
            <strong>Cookie Preferences</strong> link in the site footer. Opening it shows your
            currently saved choices — not defaults — and any change takes effect immediately,
            without needing to reload the page.
          </p>
          <p>
            You can also control cookies through your browser&apos;s own settings, which will
            affect this and every other site you visit; see your browser&apos;s help
            documentation for instructions. Disabling cookies at the browser level may affect
            site functionality beyond what our own Analytics toggle controls.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          We may update this Cookie Policy from time to time. Changes will be posted on this page
          with an updated effective date.
        </Section>

        <Section title="7. Contact Us">
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <p className="mt-2">
            GoldSilverSelect<br />
            Durango, Colorado<br />
            privacy@goldsilverselect.com
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl font-semibold text-forest mb-3">{title}</h2>
      <div className="font-sans text-[14.5px] leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}
