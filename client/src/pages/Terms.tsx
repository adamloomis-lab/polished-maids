import PolicyLayout from "@/components/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      title="Terms of Service"
      metaTitle="Terms of Service | Polished Maids Cleaning Service"
      metaDescription="The terms that govern your use of the Polished Maids Cleaning Service website."
      lastUpdated="May 24, 2026"
    >
      <p>
        These Terms of Service ("Terms") govern your use of the website at polished-maids.netlify.app
        (the "Site"), operated by Polished Maids Cleaning Service ("Polished Maids," "we," "us," or
        "our"). By accessing or using the Site, you agree to these Terms. If you do not agree, please
        do not use the Site.
      </p>

      <h2>Our Services</h2>
      <p>
        The Site provides information about our residential and commercial cleaning services and a
        way to request a quote. Booking and delivery of cleaning services are arranged separately and
        are subject to the specific scope, pricing, and scheduling agreed upon between you and
        Polished Maids.
      </p>

      <h2>Quotes &amp; Estimates</h2>
      <p>
        Quotes provided through the Site or in response to your inquiry are estimates based on the
        information you provide. Final pricing may vary depending on the actual condition, size, and
        scope of the space to be cleaned. A quote does not constitute a binding contract until
        confirmed by both parties.
      </p>

      <h2>Acceptable Use</h2>
      <ul>
        <li>Use the Site only for lawful purposes;</li>
        <li>Do not submit false, misleading, or another person's information without permission;</li>
        <li>Do not attempt to disrupt, damage, or gain unauthorized access to the Site.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        The content on this Site — including text, logos, images, and video — is owned by or licensed
        to Polished Maids and is protected by applicable laws. You may not copy, reproduce, or reuse
        it without our written permission.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The Site is provided "as is" and "as available" without warranties of any kind, whether
        express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or
        free of harmful components.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Polished Maids will not be liable for any indirect,
        incidental, or consequential damages arising from your use of the Site. Nothing in these
        Terms limits liability that cannot be limited under applicable law.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        The Site may link to third-party websites or services that we do not control. We are not
        responsible for their content or practices, and your use of them is at your own risk.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Ohio, without regard to its
        conflict-of-law rules.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Changes take effect when posted here, with the
        "Last updated" date revised accordingly.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href="mailto:polishedmaidsohio@gmail.com">polishedmaidsohio@gmail.com</a> or{" "}
        <a href="tel:+13302427203">(330) 242-7203</a>.
      </p>

      <p className="policy-note">
        These Terms are provided for general informational purposes and are not legal advice. Please
        review them with your own legal counsel to confirm they fit your specific situation.
      </p>
    </PolicyLayout>
  );
}
