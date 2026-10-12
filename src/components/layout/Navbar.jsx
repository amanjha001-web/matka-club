
import Container from "../common/Container";
import Button from "../common/Button";

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-500/20 bg-[#070b14]/90 backdrop-blur-xl shadow-lg shadow-blue-950/10">
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a
            href="/matkaclub.apk"
            className="text-xl font-black tracking-[-0.04em] text-white transition-colors duration-200 hover:text-blue-300 md:text-2xl"
          >
            MATKA{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              CLUB
            </span>
          </a>

          {/* Desktop CTA */}
          <Button href="/matkaclub.apk">
            DOWNLOAD APP
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
