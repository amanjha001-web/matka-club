
import Container from "../components/common/Container";

function GamblingTerms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using MATKA CLUB, you acknowledge that you have read and understood these terms. If you do not agree with these terms, please discontinue using the platform.",
    },
    {
      title: "2. Eligibility and Legal Compliance",
      content:
        "Users are responsible for ensuring that their access to and use of the platform complies with the laws applicable in their location. Do not use this platform if your participation is prohibited by local law or if you are below the legal age applicable to the service.",
    },
    {
      title: "3. Responsible Use",
      content:
        "Users should make informed decisions and understand that gambling-related activities may involve financial risk. Never spend money you cannot afford to lose, and seek appropriate support if gambling becomes difficult to control.",
    },
    {
      title: "4. No Guarantee of Outcomes",
      content:
        "Any information, predictions, examples, or results displayed on the platform are not guarantees of future outcomes. Users should not rely on such information as a promise of winnings or financial returns.",
    },
    {
      title: "5. Prohibited Activities",
      content:
        "Users must not misuse the platform, attempt unauthorized access, submit fraudulent information, interfere with its operation, or use it for activities prohibited by applicable law.",
    },
    {
      title: "6. Intellectual Property",
      content:
        "Unless otherwise stated, the platform's branding, design, text, and other original content are protected by applicable intellectual property laws. Unauthorized copying or redistribution may be prohibited.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "To the extent permitted by applicable law, MATKA CLUB is not responsible for losses arising from reliance on displayed information, service interruptions, or unauthorized use of the platform.",
    },
    {
      title: "8. Changes to These Terms",
      content:
        "We may update these terms from time to time. Updated terms will be published on this page, along with a revised effective date where appropriate.",
    },
    {
      title: "9. Contact Information",
      content:
        "For questions about these terms, please contact the platform operator using the official contact details published on the website.",
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
              Legal Information
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Gambling{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Terms
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Please read these terms carefully to understand the rules,
              responsibilities, and limitations associated with using
              MATKA CLUB.
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Effective date: October 12, 2026
            </p>
          </div>

          {/* Important Notice */}
          <div className="mb-6 rounded-2xl border border-blue-500/20 bg-[#0e1422] p-5 shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6">
            <h2 className="mb-2 text-sm font-bold text-blue-400 sm:text-base">
              Important Notice
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              Gambling laws vary by jurisdiction. Nothing on this page
              authorizes an activity that is illegal where you live. Verify
              the applicable laws before accessing any gambling-related
              service.
            </p>
          </div>

          {/* Terms Sections */}
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
              By continuing to use MATKA CLUB, you agree to comply with
              applicable laws and the terms described above.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default GamblingTerms;
