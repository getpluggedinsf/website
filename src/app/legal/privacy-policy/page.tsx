import type { Metadata } from "next";
import PublicDocumentLayout from "@/components/public-docs/PublicDocumentLayout";
import PublicDocumentSection from "@/components/public-docs/PublicDocumentSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for PluggedIn Pros, a Wi-Fi and network infrastructure service provider in San Francisco.",
};

export default function PrivacyPolicyPage() {
  return (
    <PublicDocumentLayout
      title="Privacy Policy"
      version="v1.0"
      effectiveDate="June 18, 2026"
      pdfHref="/documents/legal/privacy-policy/privacy-policy-v1.0.pdf"
    >
      <PublicDocumentSection title="1. Introduction">
        <p>
          This Privacy Policy describes how Welby Group LLC, doing business as
          PluggedIn Pros (&quot;PluggedIn Pros&quot;, &quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;), collects, uses, stores, and
          protects information obtained through our website, client onboarding
          processes, service engagements, and related business activities.
        </p>
        <p>
          By using our website, submitting information to us, or engaging our
          services, you acknowledge this Privacy Policy.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="2. Information You Provide">
        <p>
          We may collect information that you voluntarily provide through website
          forms, onboarding forms, email communications, phone calls, service
          requests, and other interactions.
        </p>

        <h3>Contact Information</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business name</li>
          <li>Job title</li>
        </ul>

        <h3>Business Information</h3>
        <ul>
          <li>Business locations</li>
          <li>Service addresses</li>
          <li>Billing information</li>
          <li>Service requirements</li>
          <li>Project details</li>
          <li>Service inquiries</li>
        </ul>

        <h3>Client Onboarding Information</h3>
        <ul>
          <li>Authorized representatives</li>
          <li>Billing contacts</li>
          <li>Operational contacts</li>
          <li>Preferred communication methods</li>
          <li>Business operating information</li>
        </ul>
      </PublicDocumentSection>

      <PublicDocumentSection title="3. Client Service Information">
        <p>
          In connection with authorized services, we may collect, create, or
          retain information necessary to provide services and support future
          engagements.
        </p>

        <ul>
          <li>Service notes</li>
          <li>Troubleshooting records</li>
          <li>Network documentation</li>
          <li>Equipment information</li>
          <li>Configuration information</li>
          <li>Service history</li>
          <li>Diagrams</li>
          <li>Photographs</li>
          <li>Operational observations</li>
          <li>Recommendations and findings</li>
        </ul>

        <h3>Credentials and Access Information</h3>
        <p>
          When necessary to perform authorized services, we may receive,
          generate, or retain usernames, passwords, Wi-Fi credentials, access
          codes, API keys, and similar access information.
        </p>
        <p>
          Such information is retained only as reasonably necessary to support
          authorized services, continuity of service, and future support
          activities.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="4. Website Information">
        <p>
          Our website may automatically collect limited technical information
          necessary for website operation, performance analysis, security, and
          service improvement.
        </p>

        <ul>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Referring pages</li>
          <li>Visited pages</li>
          <li>Approximate geographic information</li>
          <li>Website performance metrics</li>
        </ul>

        <p>
          We currently utilize Vercel Analytics to better understand website
          usage and website performance.
        </p>
        <p>
          We do not currently use website analytics for advertising,
          remarketing, or cross-site behavioral tracking.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="5. How We Use Information">
        <p>We may use collected information to:</p>
        <ul>
          <li>Respond to inquiries</li>
          <li>Provide requested services</li>
          <li>Schedule engagements</li>
          <li>Prepare estimates and invoices</li>
          <li>Maintain client records</li>
          <li>Support future service engagements</li>
          <li>Improve service delivery</li>
          <li>Improve website functionality</li>
          <li>Maintain business operations</li>
          <li>Comply with legal obligations</li>
        </ul>
      </PublicDocumentSection>

      <PublicDocumentSection title="6. Information Sharing">
        <p>PluggedIn Pros does not sell personal information.</p>
        <p>We may share information when reasonably necessary to:</p>
        <ul>
          <li>Deliver authorized services</li>
          <li>Work with subcontractors or specialized service providers</li>
          <li>Process payments</li>
          <li>Comply with legal requirements</li>
          <li>Protect our legal rights</li>
          <li>Maintain business operations</li>
        </ul>
        <p>
          Any information shared will be limited to what is reasonably necessary
          for the intended purpose.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="7. Information Security">
        <p>
          PluggedIn Pros makes reasonable efforts to protect information from
          unauthorized access, disclosure, alteration, or destruction.
        </p>
        <p>
          However, no storage system, communication method, or technology
          platform can guarantee absolute security.
        </p>
        <p>
          Users should avoid transmitting sensitive information through
          unsecured communication channels whenever practical.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="8. Information Retention">
        <p>We may retain information for as long as reasonably necessary to:</p>
        <ul>
          <li>Provide services</li>
          <li>Maintain service records</li>
          <li>Support future engagements</li>
          <li>
            Meet legal, accounting, operational, or administrative requirements
          </li>
        </ul>
        <p>
          Service records, operational documentation, network documentation, and
          related support records may be retained for extended periods to
          support continuity of service and future engagements.
        </p>
        <p>
          Retention periods may vary depending on the nature of the information
          and the associated business purpose.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="9. Cookies and Similar Technologies">
        <p>
          Our website may use cookies or similar technologies necessary for
          website functionality, analytics, security, and performance
          measurement.
        </p>
        <p>
          Users may adjust browser settings to limit or disable cookies,
          although some website functionality may be affected.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="10. Third-Party Services">
        <p>
          We utilize third-party service providers to operate our business and
          deliver services.
        </p>
        <ul>
          <li>Website hosting providers</li>
          <li>Analytics providers</li>
          <li>Email providers</li>
          <li>Cloud storage providers</li>
          <li>Documentation platforms</li>
          <li>Password management platforms</li>
          <li>Payment processors</li>
          <li>Accounting systems</li>
          <li>Productivity platforms</li>
        </ul>
        <p>These third parties maintain their own privacy policies and practices.</p>
      </PublicDocumentSection>

      <PublicDocumentSection title="11. California Privacy Rights">
        <p>
          California residents may have certain privacy rights under applicable
          California law.
        </p>
        <p>
          Subject to applicable legal requirements and exceptions, California
          residents may request information regarding personal information we
          maintain about them, correction of inaccurate personal information, or
          deletion of personal information where applicable law requires.
        </p>
        <p>
          Certain information may be retained where necessary to provide
          services, maintain business records, comply with legal obligations,
          resolve disputes, or protect legitimate business interests.
        </p>
        <p>
          Privacy-related requests may be submitted using the contact information
          provided below.
        </p>
        <p>
          We will make reasonable efforts to respond to legitimate requests in
          accordance with applicable law.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="12. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time.</p>
        <p>
          Updated versions will be identified by version number and effective
          date.
        </p>
        <p>
          Continued use of our website or services after publication of updated
          versions constitutes acknowledgment of the revised policy.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="13. Contact Information">
        <p>Questions regarding this Privacy Policy may be submitted through:</p>
        <p>
          <a
            href="/contact?intent=general"
            className="text-[var(--pip-orange)] underline"
          >
            Contact PluggedIn Pros
          </a>
        </p>
        <p>© Welby Group LLC dba PluggedIn Pros</p>
      </PublicDocumentSection>
    </PublicDocumentLayout>
  );
}
