import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GoldSilverSelect terms of service — the legal agreement governing your use of our website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="font-serif text-3xl font-bold text-forest mb-2">Terms of Service</h1>
        <p className="font-sans text-sm mb-10" style={{ color: "#888" }}>
          Effective Date: March 23, 2026
        </p>

        <Section title="1. Acceptance of Terms">
          By accessing or using the GoldSilverSelect website (&quot;Site&quot;), you agree to be
          bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the
          Site. We reserve the right to modify these Terms at any time, and your continued use
          constitutes acceptance of any changes.
        </Section>

        <Section title="2. Description of Service">
          GoldSilverSelect is an independent directory of precious metals dealers, Gold &amp; Silver
          IRA custodians, recyclers, and jewelers. We do not sell precious metals, act as a broker
          or dealer, or provide financial, investment, or tax advice. All information on the Site is
          for educational and informational purposes only.
        </Section>

        <Section title="3. Eligibility">
          You must be at least 18 years old to use this Site. By using the Site, you represent and
          warrant that you meet this age requirement and have the legal capacity to enter into these
          Terms.
        </Section>

        <Section title="4. Use License">
          <p className="mb-3">
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and
            use the Site for personal, non-commercial purposes. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Copy, reproduce, or distribute Site content without written permission</li>
            <li>Use the Site for any unlawful or unauthorized purpose</li>
            <li>Scrape, harvest, or collect data from the Site using automated means</li>
            <li>Attempt to interfere with or disrupt the Site&apos;s operation</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
          </ul>
        </Section>

        <Section title="5. Financial &amp; Investment Disclaimer">
          <p className="mb-3">
            GoldSilverSelect does not provide financial, investment, or tax advice. Nothing on this
            Site constitutes a recommendation to buy, sell, or hold any precious metal, security, or
            investment product. Precious metals investing involves risk, including possible loss of
            principal. Past performance does not guarantee future results.
          </p>
          <p>
            You should always consult a qualified financial advisor, tax professional, or other
            appropriate expert before making any investment decisions. We disclaim all liability for
            any losses or damages arising from your reliance on information found on this Site.
          </p>
        </Section>

        <Section title="6. Third-Party Links &amp; Dealer Listings">
          The Site contains links to third-party websites and dealer listings. We do not endorse,
          guarantee, or assume responsibility for any third-party content, products, or services.
          Your interactions with listed dealers are solely between you and the dealer. We encourage
          you to conduct your own due diligence before engaging with any dealer.
        </Section>

        <Section title="7. Intellectual Property">
          All content on the Site — including text, graphics, logos, icons, and software — is the
          property of GoldSilverSelect or its licensors and is protected by applicable intellectual
          property laws. Unauthorized use may violate copyright, trademark, and other laws.
        </Section>

        <Section title="8. Disclaimer of Warranties">
          THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
          ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
          WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER
          HARMFUL COMPONENTS.
        </Section>

        <Section title="9. Limitation of Liability">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOLDSILVERSELECT AND ITS OFFICERS, DIRECTORS,
          EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING
          OUT OF OR RELATED TO YOUR USE OF THE SITE, REGARDLESS OF THE THEORY OF LIABILITY.
        </Section>

        <Section title="10. Indemnification">
          You agree to indemnify, defend, and hold harmless GoldSilverSelect and its officers,
          directors, employees, and agents from any claims, liabilities, damages, losses, and
          expenses (including reasonable attorneys&apos; fees) arising out of your use of the Site or
          violation of these Terms.
        </Section>

        <Section title="11. Binding Arbitration">
          <p className="mb-3">
            Any dispute, controversy, or claim arising out of or relating to these Terms or the use
            of the Site shall be resolved by binding arbitration administered by the American
            Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration
            Rules. The arbitration shall be conducted by a single arbitrator.
          </p>
          <p className="mb-3">
            The seat of arbitration shall be Durango, La Plata County, Colorado. The arbitrator&apos;s
            decision shall be final and binding, and judgment on the award may be entered in any
            court of competent jurisdiction.
          </p>
          <p>
            You agree that any arbitration shall be conducted on an individual basis and not as a
            class, consolidated, or representative action. The arbitrator may not consolidate
            proceedings or preside over any form of representative or class proceeding.
          </p>
        </Section>

        <Section title="12. Class Action Waiver">
          YOU AGREE TO WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
          ARBITRATION AGAINST GOLDSILVERSELECT. YOU ACKNOWLEDGE THAT YOU ARE GIVING UP YOUR RIGHT TO
          PARTICIPATE AS A CLASS REPRESENTATIVE OR CLASS MEMBER ON ANY CLASS CLAIM YOU MAY HAVE
          AGAINST GOLDSILVERSELECT, INCLUDING ANY RIGHT TO CLASS ARBITRATION OR ANY CONSOLIDATION OF
          INDIVIDUAL ARBITRATIONS.
        </Section>

        <Section title="13. Governing Law &amp; Venue">
          These Terms shall be governed by and construed in accordance with the laws of the State of
          Colorado, without regard to its conflict of laws provisions. To the extent any dispute is
          not subject to arbitration, the exclusive venue shall be the state and federal courts
          located in La Plata County, Colorado, and you consent to the personal jurisdiction of such
          courts.
        </Section>

        <Section title="14. Termination">
          We reserve the right to terminate or suspend your access to the Site at any time, without
          notice, for any reason, including violation of these Terms. Upon termination, all
          provisions of these Terms that by their nature should survive shall remain in effect.
        </Section>

        <Section title="15. Severability">
          If any provision of these Terms is held to be invalid or unenforceable, the remaining
          provisions shall continue in full force and effect. The invalid or unenforceable provision
          shall be modified to the minimum extent necessary to make it valid and enforceable.
        </Section>

        <Section title="16. Contact Us">
          <p>If you have questions about these Terms, please contact us at:</p>
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
