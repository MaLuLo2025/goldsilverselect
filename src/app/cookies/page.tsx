import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "GoldSilverSelect cookie policy — what cookies we use, why, and how to manage them.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl font-bold text-forest mb-2">Cookie Policy</h1>
        <p className="font-sans text-sm mb-10" style={{ color: "#888" }}>
          Effective Date: March 23, 2026
        </p>

        <Section title="1. What Are Cookies">
          Cookies are small text files placed on your device when you visit a website. They help the
          site remember your preferences, understand how you use the site, and improve your overall
          experience. Cookies may be set by the site you are visiting (&quot;first-party
          cookies&quot;) or by third-party services operating on that site (&quot;third-party
          cookies&quot;).
        </Section>

        <Section title="2. How We Use Cookies">
          <p className="mb-4">GoldSilverSelect uses the following types of cookies:</p>

          <h3 className="font-serif font-semibold text-forest mb-1.5">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable core
            features such as page navigation and remembering your cookie consent preferences. The
            site cannot function correctly without these cookies, and they cannot be disabled.
          </p>

          <h3 className="font-serif font-semibold text-forest mb-1.5">Analytics Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how visitors interact with the site by collecting
            information about pages visited, time spent on the site, and any errors encountered.
            This data is aggregated and anonymous and is used solely to improve the website. We may
            use services such as Google Analytics for this purpose.
          </p>

          <h3 className="font-serif font-semibold text-forest mb-1.5">Preference Cookies</h3>
          <p>
            These cookies remember choices you make (such as your selected state or preferred
            filters) to provide a more personalized experience. They do not track your browsing
            activity on other websites.
          </p>
        </Section>

        <Section title="3. Third-Party Cookies">
          Some cookies on our site are set by third-party services we use, such as analytics
          providers and embedded content (e.g., videos). These third parties may use cookies to
          collect information about your online activity across different websites. We do not control
          these cookies and encourage you to review the privacy policies of these third parties.
        </Section>

        <Section title="4. Managing Your Cookie Preferences">
          <p className="mb-3">
            When you first visit our site, a cookie consent banner allows you to accept or reject
            non-essential cookies. You can change your preferences at any time by:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-3">
            <li>Clearing your browser cookies and revisiting the site to see the banner again</li>
            <li>
              Adjusting your browser settings to block or delete cookies (see your browser&apos;s
              help documentation for instructions)
            </li>
          </ul>
          <p>
            Please note that disabling certain cookies may affect the functionality of the website.
          </p>
        </Section>

        <Section title="5. Cookie Retention">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Session cookies</strong> are deleted when you close your browser.
            </li>
            <li>
              <strong>Persistent cookies</strong> remain on your device for a set period or until
              you delete them. Our consent cookie is stored for up to 12 months.
            </li>
          </ul>
        </Section>

        <Section title="6. Changes to This Policy">
          We may update this Cookie Policy from time to time. Changes will be posted on this page
          with an updated effective date. Your continued use of the site after changes constitutes
          acceptance of the revised policy.
        </Section>

        <Section title="7. Contact Us">
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <p className="mt-2">
            GoldSilverSelect<br />
            Durango, Colorado<br />
            contact@goldsilverselect.com
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
