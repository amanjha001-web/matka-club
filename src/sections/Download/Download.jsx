
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

function Download() {
  return (
    <section
      id="download"
      className="bg-[#070b14] py-24 md:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0e1422] px-6 py-16 text-center shadow-2xl shadow-blue-950/10 md:px-10">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

          {/* Heading */}
          <h2 className="relative text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            Get{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              MATKA CLUB
            </span>{" "}
            on Your Phone
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-400 md:text-base">
            Access the MATKA CLUB experience directly from your phone.
            Download the app using the button below and follow the
            installation instructions on your device.
          </p>

          {/* Download Button */}
          <div className="relative mt-8">
            <Button
              href="/matkaclub.apk"
              className="px-8 py-4 text-sm sm:px-10 sm:py-5"
            >
              ↓ &nbsp; DOWNLOAD NOW
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="relative mt-5 text-xs text-slate-500">
            Please ensure your device supports the app before installing.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Download;
