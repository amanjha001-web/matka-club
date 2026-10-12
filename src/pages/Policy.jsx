
import Container from "../components/common/Container";

function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "This Privacy Policy explains how MATKA CLUB may collect, use, store, and protect information when you visit or interact with our platform.",
    },
    {
      title: "2. Information We May Collect",
      content:
        "Depending on the features you use, information may include details you voluntarily submit through contact forms, basic technical information such as browser type and device information, and usage data collected to understand how the website performs.",
    },
    {
      title: "3. How We Use Information",
      content:
        "Information may be used to operate and maintain the website, respond to enquiries, improve performance and usability, protect the platform against misuse, and comply with applicable legal obligations.",
    },
    {
      title: "4. Cookies and Similar Technologies",
      content:
        "The website may use cookies or similar technologies for essential functionality, preferences, analytics, or security. You can manage cookies through your browser settings where available.",
    },
    {
      title: "5. Sharing of Information",
      content:
        "We do not sell personal information as a general business practice. Information may be shared with service providers who help operate the website, when required by law, or when necessary to protect legal rights and platform security.",
    },
    {
      title: "6. Data Security",
      content:
        "Reasonable technical and organizational measures should be used to protect information. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
    },
    {
      title: "7. Data Retention",
      content:
        "Information should be retained only for as long as reasonably necessary for the purposes described in this policy, including legitimate operational needs and applicable legal requirements.",
    },
    {
      title: "8. Your Privacy Choices",
      content:
        "Depending on applicable law, you may have rights to request access to, correction of, or deletion of your personal information. You may also be able to object to certain processing. Contact the platform operator to submit a request.",
    },
    {
      title: "9. Third-Party Links",
      content:
        "Our website may link to external websites or services. Their privacy practices are governed by their own policies, and we encourage you to review those policies before sharing information.",
    },
    {
      title: "10. Children's Privacy",
      content:
        "MATKA CLUB is not intended for children or anyone below the minimum legal age for the relevant services. We do not knowingly seek to collect personal information from children in violation of applicable law.",
    },
    {
      title: "11. Policy Updates",
      content:
        "This policy may be updated to reflect changes in the website, operational practices, or applicable law. Any revised version will be published on this page.",
    },
    {
      title: "12. Contact Us",
      content:
        "For privacy-related questions or requests, contact the platform operator through the official contact details published on the website.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070b14] pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Your Privacy Matters
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Learn how information may be handled when you visit and interact
              with MATKA CLUB.
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Effective date: October 12, 2026
            </p>
          </div>

          {/* Intro */}
          <div className="mb-6 rounded-2xl border border-blue-500/20 bg-[#0e1422] p-5 shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6">
            <h2 className="mb-2 text-sm font-bold text-blue-400 sm:text-base">
              Our Privacy Commitment
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              We aim to handle personal information responsibly and explain
              our practices clearly. The actual information collected depends
              on the features, integrations, and services enabled on the
              website.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-slate-800/80 bg-[#0e1422] p-5 transition-colors duration-300 hover:border-blue-500/30 sm:p-7"
              >
                <h2 className="mb-3 text-base font-bold text-white sm:text-lg">
                  {section.title}
                </h2>

                <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              If you have questions about this Privacy Policy, please use the
              official contact information provided by MATKA CLUB.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default PrivacyPolicy;
