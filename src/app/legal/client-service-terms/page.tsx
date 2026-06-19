import type { Metadata } from "next";
import PublicDocumentLayout from "@/components/public-docs/PublicDocumentLayout";
import PublicDocumentSection from "@/components/public-docs/PublicDocumentSection";

export const metadata: Metadata = {
  title: "Client Service Terms",
  description:
    "Client Service Terms for PluggedIn Pros technology consulting, troubleshooting, assessment, installation, and related services.",
};

export default function ClientServiceTermsPage() {
  return (
    <PublicDocumentLayout
      title="Client Service Terms"
      version="v1.0"
      effectiveDate="June 17, 2026"
      pdfHref="/documents/legal/client-service-terms/client-service-terms-v1.0.pdf"
    >
      <PublicDocumentSection title="1. Purpose">
        <p>
          These Client Service Terms (&quot;Terms&quot;) govern services
          provided by Welby Group LLC, doing business as PluggedIn Pros
          (&quot;PluggedIn Pros&quot;, &quot;Provider&quot;), to the client
          (&quot;Client&quot;).
        </p>
        <p>
          These Terms apply to all services provided by PluggedIn Pros unless
          superseded by a separate written agreement.
        </p>
        <p>
          Acceptance of an estimate, proposal, onboarding form, service
          authorization, or other written authorization constitutes acceptance
          of these Terms.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="2. Services">
        <p>
          PluggedIn Pros provides technology consulting, troubleshooting,
          assessment, installation, documentation, and related technical
          services.
        </p>
        <p>
          The scope of each engagement is defined by the applicable estimate,
          proposal, service description, statement of work, or written
          authorization.
        </p>
        <p>
          Services requested outside the approved scope may require additional
          authorization and may result in additional charges.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="3. Authorization">
        <p>The Client represents that the individual requesting services is authorized to:</p>
        <ul>
          <li>request services on behalf of the Client;</li>
          <li>approve estimates and service engagements;</li>
          <li>
            authorize access to facilities, equipment, systems, and information
            necessary to perform the requested services.
          </li>
        </ul>
        <p>
          PluggedIn Pros may reasonably rely upon such authorization unless
          notified otherwise in writing.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="4. Scheduling and Site Access">
        <p>The Client agrees to provide reasonable access to:</p>
        <ul>
          <li>facilities;</li>
          <li>equipment;</li>
          <li>network infrastructure;</li>
          <li>personnel;</li>
          <li>documentation;</li>
        </ul>
        <p>required to perform the requested services.</p>
        <p>
          The Client is responsible for ensuring that appropriate personnel are
          available when necessary.
        </p>
        <p>
          Appointments may be rescheduled by either party when reasonably
          required.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="5. Documentation and Information Retention">
        <p>
          To support service delivery, future support activities, and business
          administration, PluggedIn Pros may retain records related to client
          engagements, including:
        </p>
        <ul>
          <li>contact information;</li>
          <li>equipment information;</li>
          <li>network information;</li>
          <li>service notes;</li>
          <li>troubleshooting records;</li>
          <li>diagrams;</li>
          <li>photographs;</li>
          <li>service history;</li>
          <li>operational observations.</li>
        </ul>
        <p>
          Such information may be retained for the purpose of supporting future
          engagements, maintaining continuity of service, and preserving
          institutional knowledge regarding the Client&apos;s environment.
          Records may be retained indefinitely.
        </p>
        <p>
          PluggedIn Pros will make reasonable efforts to protect retained
          information from unauthorized access but cannot guarantee absolute
          security.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="6. Credentials and Access Information">
        <p>
          PluggedIn Pros may receive, generate, or retain credentials necessary
          to perform authorized services, including usernames, passwords, Wi-Fi
          credentials, API keys, access codes, and similar access information.
        </p>
        <p>
          Credential information may be retained only as reasonably necessary to
          support authorized services, future support activities, and continuity
          of service.
        </p>
        <p>
          PluggedIn Pros will make reasonable efforts to protect credential
          information from unauthorized access but cannot guarantee absolute
          security.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="7. Photography">
        <p>
          During service engagements, PluggedIn Pros may photograph equipment,
          infrastructure, cable installations, equipment labels, and related
          technical assets for documentation and support purposes.
        </p>
        <p>
          Photographs may be retained as part of the Client&apos;s service records.
        </p>
        <p>
          Photographs will not intentionally focus on customers, employees, or
          unrelated personal information.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="8. Estimates and Additional Work">
        <p>
          Estimates are based on information reasonably available at the time
          they are prepared.
        </p>
        <p>
          If additional work is required beyond the approved scope, PluggedIn
          Pros will make reasonable efforts to obtain authorization before
          proceeding.
        </p>
        <p>
          Certain low-risk corrective actions may be performed during
          troubleshooting or support engagements when necessary to facilitate
          diagnosis or restore service.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="9. Billing and Payment">
        <p>Invoices are due according to the payment terms stated on the invoice.</p>
        <p>
          Unless otherwise agreed in writing, invoices are due within fifteen
          (15) days of issuance.
        </p>
        <p>
          The Client is responsible for payment of all authorized services
          performed on its behalf.
        </p>
        <p>
          PluggedIn Pros reserves the right to suspend future services for
          accounts with outstanding balances.
        </p>
        <p>
          PluggedIn Pros reserves the right to assess reasonable late-payment
          charges, collection costs, and returned-payment fees where permitted
          by applicable law.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="10. Third-Party Systems, Vendors, and Referrals">
        <p>
          Many services involve systems owned or operated by third parties,
          including:
        </p>
        <ul>
          <li>Internet service providers;</li>
          <li>cloud service providers;</li>
          <li>point-of-sale vendors;</li>
          <li>hardware manufacturers;</li>
          <li>software providers;</li>
          <li>telecommunications providers.</li>
        </ul>
        <p>
          PluggedIn Pros does not control such systems and cannot guarantee
          their availability, performance, reliability, or behavior.
        </p>
        <p>
          Recommendations regarding third-party systems or vendors are provided
          in good faith based upon available information.
        </p>
        <p>
          PluggedIn Pros may utilize qualified subcontractors or specialized
          service providers when appropriate to complete authorized work.
        </p>
        <p>
          When PluggedIn Pros refers the Client to a third-party vendor,
          contractor, or service provider, such referral is provided as a
          convenience only. PluggedIn Pros is not responsible for services
          provided directly by third parties.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="11. Safe Working Environment">
        <p>
          The Client agrees to provide a reasonably safe working environment and
          to disclose known hazards relevant to the engagement.
        </p>
        <p>
          PluggedIn Pros will exercise reasonable care while performing
          authorized services.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="12. Warranties and Limitations">
        <p>
          Technology systems are inherently complex and may involve factors
          beyond the Provider&apos;s control.
        </p>
        <p>
          PluggedIn Pros makes no guarantee that a particular issue can be
          diagnosed, resolved, prevented, or avoided.
        </p>
        <p>
          Certain services, including assessments and troubleshooting
          engagements, may result in recommendations rather than direct
          remediation.
        </p>
        <p>Services are provided on a commercially reasonable efforts basis.</p>
        <p>
          PluggedIn Pros is not responsible for loss of data, business
          interruption, service outages, or consequential damages arising from
          factors outside its reasonable control.
        </p>
        <p>
          The Client remains responsible for maintaining appropriate backups,
          security measures, disaster recovery plans, and business continuity
          procedures.
        </p>
        <p>
          To the maximum extent permitted by law, PluggedIn Pros shall not be
          liable for indirect, incidental, consequential, special, exemplary, or
          punitive damages arising from the use of its services.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="13. Recommendations and Client Decisions">
        <p>
          PluggedIn Pros may provide recommendations intended to improve
          reliability, performance, maintainability, security, operational
          efficiency, or future scalability.
        </p>
        <p>
          Implementation of such recommendations remains the responsibility of
          the Client unless separately authorized as a service engagement.
        </p>
      </PublicDocumentSection>

      <PublicDocumentSection title="14. Changes to Terms">
        <p>PluggedIn Pros may update these Terms from time to time.</p>
        <p>
          Updated versions will be identified by version number and effective
          date.
        </p>
        <p>Future engagements may require acknowledgment of revised Terms.</p>
      </PublicDocumentSection>

      <PublicDocumentSection title="15. Contact Information">
        <p>Questions regarding these Terms may be submitted through:</p>
        <p>
          <a href="/contact?intent=general">Contact PluggedIn Pros</a>
        </p>
      </PublicDocumentSection>
    </PublicDocumentLayout>
  );
}
