
function FeatureCard({ icon, title, description }) {
  return (
    <article
      className="
        group relative isolate overflow-hidden
        rounded-2xl border border-blue-500/15
        bg-gradient-to-br from-[#111a2b] via-[#0e1422] to-[#090e19]
        p-7
        shadow-lg shadow-black/20
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-blue-400/40
        hover:shadow-xl hover:shadow-blue-950/30
      "
    >
      {/* Subtle Background Glow */}
      <div
        className="
          pointer-events-none absolute -right-16 -top-16
          -z-10 h-40 w-40 rounded-full
          bg-blue-500/10 blur-3xl
          transition-all duration-500
          group-hover:bg-indigo-500/20
        "
      />

      {/* Top Accent Line */}
      <div
        className="
          absolute inset-x-7 top-0 h-px
          bg-gradient-to-r from-transparent
          via-blue-400/60 to-transparent
          opacity-50 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative mb-6 flex h-12 w-12
          items-center justify-center
          rounded-xl border border-blue-400/25
          bg-gradient-to-br from-blue-500/20
          to-indigo-600/10
          text-xl font-black text-blue-400
          shadow-md shadow-blue-950/20
          transition-all duration-300
          group-hover:scale-110
          group-hover:border-blue-400/50
          group-hover:from-blue-500/30
          group-hover:to-indigo-500/20
          group-hover:text-blue-300
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          mb-3 text-base font-bold tracking-wide
          text-white transition-colors duration-300
          group-hover:text-blue-300
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {description}
      </p>

      {/* Bottom Accent */}
      <div
        className="
          mt-6 h-0.5 w-8 rounded-full
          bg-gradient-to-r from-blue-500 to-indigo-500
          transition-all duration-300
          group-hover:w-16
        "
      />
    </article>
  );
}

export default FeatureCard;
