
import { Link } from "react-router-dom";
import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-[#070b14] py-9">
      <Container>
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
    </footer>
  );
}

export default Footer;
