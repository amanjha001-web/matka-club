
import Container from "../../components/common/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚡",
    title: "Fast & Smooth",
    description:
      "Enjoy smooth navigation, responsive interactions, and a clean interface designed to make browsing simple across different devices.",
  },
  {
    icon: "◆",
    title: "Modern Design",
    description:
      "Explore a premium dark interface with elegant blue-indigo accents, refined visual details, and a consistent, modern layout.",
  },
  {
    icon: "◉",
    title: "Mobile Ready",
    description:
      "Experience a responsive layout designed for mobile phones, tablets, and desktop screens with comfortable spacing and readable content.",
  },
];

function Features() {
  return (
    <section className="relative overflow-hidden border-t border-blue-500/10 bg-[#070b14] py-24 md:py-28">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Why MATKA CLUB
          </span>

          <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
            A{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Experience
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">
            Discover a modern interface built around thoughtful design,
            responsive layouts, and a consistent experience across your
            devices.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
