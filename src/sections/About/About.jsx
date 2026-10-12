
import Container from "../../components/common/Container";

function About() {
  return (
    <section className="border-t border-blue-500/20 bg-[#070b14] py-24 md:py-28">
      <Container>
        <div className="max-w-[780px]">
          {/* Section Heading */}
          <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              MATKA CLUB
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-slate-400 md:text-base md:leading-8">
            MATKA CLUB is designed with a focus on a clean interface,
            responsive layouts, and a smooth browsing experience across
            mobile phones, tablets, and desktop devices. The platform aims
            to keep its layout simple and easy to navigate, helping users
            find important information without unnecessary complexity.
            With a modern dark theme, clear visual elements, and consistent
            styling, MATKA CLUB brings together usability and a polished
            digital experience. Our goal is to make the interface accessible,
            intuitive, and comfortable to use across different screen sizes.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
