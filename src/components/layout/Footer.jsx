
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-[#070b14] py-9">
      <Container
        className="
          mb-30
        "
      >
        {/* Copyright */}
        <div className="text-center text-[11px] text-slate-500">
          © 2026{" "}
          <strong className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            MATKA CLUB
          </strong>{" "}
          · Premium Experience
        </div>
        {/* Footer Links */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] text-slate-500">
          <Link
            to="/privacy"
            className="transition-colors duration-200 hover:text-blue-400"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="transition-colors duration-200 hover:text-blue-400"
          >
            Gambling Terms
          </Link>

          <a
            href="/matkaclub.apk"
            className="transition-colors duration-200 hover:text-indigo-400"
          >
            Download
          </a>
        </div>
      </Container>
      <Container>
        <div className="fixed bottom-5 left-1/2 z-50 w-[80%] -translate-x-1/2 sm:bottom-7 sm:w-[60%] md:w-[40%] lg:w-[30%]">
          <Button
            href="/matkaclub.apk"
            className="group w-full justify-center gap-3 rounded-full py-4 text-base font-bold shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] sm:text-lg"
          >
            <span className="leading-none">Download Now</span>

            <span className="inline-flex shrink-0 items-center justify-center animate-bounce px-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="block"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
            </span>
          </Button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
