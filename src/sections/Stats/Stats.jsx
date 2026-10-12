
const stats = [
  {
    value: "MC",
    label: "Premium Platform",
  },
  {
    value: "4.5 ★",
    label: "User Rating",
  },
  {
    value: "Fast",
    label: "Performance",
  },
  {
    value: "1 MB+",
    label: "Lightweight UI",
  },
  {
    value: "Mobile",
    label: "Optimized",
  },
];

function Stats() {
  return (
    <section className="border-y border-blue-500/15 bg-[#0e1422]">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              group relative px-4 py-7 text-center
              transition-all duration-300
              hover:bg-blue-500/[0.04]
              ${
                index !== 0
                  ? "border-l border-blue-500/10"
                  : ""
              }
              ${index === 4 ? "col-span-2 md:col-span-1" : ""}
            `}
          >
            {/* Top Accent */}
            <div className="absolute inset-x-1/4 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Stat Value */}
            <strong className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-lg font-black text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-indigo-300 md:text-xl">
              {stat.value}
            </strong>

            {/* Stat Label */}
            <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
