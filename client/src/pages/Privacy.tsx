import PolicyLayout from "@/components/PolicyLayout";

export default function Privacy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      metaTitle="Privacy Policy | Polished Maids Cleaning Service"
      metaDescription="How Polished Maids Cleaning Service collects, uses, and protects your personal information."
      lastUpdated="May 24, 2026"
    >
      <p>
        Polished Maids Cleaning Service ("Polished Maids," "we," "us," or "our") respects your
        privacy. This Privacy Policy explains what information we collect through our website at
        polished-maids.netlify.app (the "Site"), how we use it, and the choices you have. By using
        the Site, you agree to the practices described here.
      </p>

      <h2>Information We Collect</h2>
      <p>
        <strong>Information you give us.</strong> When you submit our contact or quote form, we
        collect the details you provide — typically your name, phone number, the type of service
        you're interested in, and any message you include.
      </p>
      <p>
        <strong>Information collected automatically.</strong> Like most websites, our hosting
        provider may log basic technical data such as your browser type, device, and the pages you
        visit. This information is used in aggregate to keep the Site running reliably and is not
        used to identify you personally.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide a cleaning quote;</li>
        <li>To schedule and deliver the services you request;</li>
        <li>To communicate with you about your service or appointment;</li>
        <li>To maintain, secure, and improve our Site.</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>
        We do <strong>not</strong> sell or rent your personal information. We may share it only with
        trusted service providers who help us operate the Site and deliver our services (for
        example, our website host, which processes form submissions and forwards them to us by
        email), or when required by law.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        We use minimal cookies necessary for the Site to function. We do not use them to build
        advertising profiles. Most browsers let you refuse or delete cookies through their settings.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep contact-form submissions only as long as needed to respond to your request and
        provide our services, after which we delete or de-identify them, unless a longer period is
        required by law.
      </p>

      <h2>Your Choices &amp; Rights</h2>
      <p>
        You may request access to, correction of, or deletion of the personal information you have
        shared with us by contacting us using the details below. You can also opt out of further
        communications at any time.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our Site is intended for adults. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided us information, please contact us and
        we will remove it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes take effect when posted here,
        with the "Last updated" date revised accordingly.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:polishedmaidsohio@gmail.com">polishedmaidsohio@gmail.com</a> or{" "}
        <a href="tel:+13302427203">(330) 242-7203</a>. Polished Maids Cleaning Service serves
        Northeast Ohio.
      </p>

      <p className="policy-note">
        This Privacy Policy is provided for general informational purposes and is not legal advice.
        Please review it with your own legal counsel to confirm it fits your specific situation.
      </p>
    </PolicyLayout>
  );
}
