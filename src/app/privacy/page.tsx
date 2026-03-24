import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GoldSilverSelect privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl font-bold text-forest mb-2">Privacy Policy</h1>
        <p className="font-sans text-sm mb-10" style={{ color: "#888" }}>
          Effective Date: March 23, 2026
        </p>

        <Section title="1. Introduction">
          GoldSilverSelect (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
          goldsilverselect.com. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website. By using the site, you agree to the
          terms of this policy.
        </Section>

        <Section title="2. Information We Collect">
          <p className="mb-3">
            <strong>Information you provide:</strong> When you subscribe to our newsletter, submit a
            contact form, or create an account, we may collect your name, email address, and any
            other information you voluntarily provide.
          </p>
          <p className="mb-3">
            <strong>Automatically collected information:</strong> We automatically collect certain
            data when you visit, including your IP address, browser type, operating system, referring
            URLs, pages viewed, and the dates and times of your visits.
          </p>
          <p>
            <strong>Cookies and tracking technologies:</strong> We use cookies and similar
            technologies to enhance your experience. See our{" "}
            <a href="/cookies" className="text-gold hover:underline">
              Cookie Policy
            </a>{" "}
            for details.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Operate and maintain the website</li>
            <li>Send newsletters and updates you have opted into</li>
            <li>Analyze usage trends to improve our content and services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="4. Sharing of Information">
          We do not sell your personal information. We may share data with trusted third-party
          service providers who assist us in operating the website (e.g., hosting, analytics, email
          delivery), provided they agree to keep your information confidential. We may also disclose
          information if required by law or to protect our rights.
        </Section>

        <Section title="5. Third-Party Links">
          Our website contains links to third-party dealer websites, news sources, and other
          external sites. We are not responsible for the privacy practices of those sites. We
          encourage you to review the privacy policies of any third-party site you visit.
        </Section>

        <Section title="6. Data Security">
          We implement reasonable administrative, technical, and physical safeguards to protect your
          personal information. However, no method of transmission over the Internet or electronic
          storage is completely secure, and we cannot guarantee absolute security.
        </Section>

        <Section title="7. Your Rights">
          Depending on your jurisdiction, you may have the right to access, correct, delete, or
          restrict the processing of your personal data. To exercise these rights, contact us at the
          address below. We will respond within the timeframe required by applicable law.
        </Section>

        <Section title="8. Children's Privacy">
          Our website is not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children. If we become aware that we have collected
          personal data from a child without parental consent, we will delete it promptly.
        </Section>

        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated effective date. Your continued use of the site after changes constitutes
          acceptance of the revised policy.
        </Section>

        <Section title="10. Contact Us">
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
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
