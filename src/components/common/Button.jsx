
function Button({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-blue-400/20
        bg-gradient-to-r
        from-blue-600
        via-blue-500
        to-indigo-600
        px-6
        py-3.5
        text-xs
        font-black
        tracking-[0.08em]
        text-white
        shadow-[0_0_25px_rgba(37,99,235,0.25)]
        transition-all
        duration-300
        hover:from-blue-500
        hover:via-blue-400
        hover:to-indigo-500
        hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
        active:scale-95
        ${className}
      `}
    >
      {/* Infinite Shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-[130%]
          skew-x-[-20deg]
          animate-[buttonShine_3s_ease-in-out_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
        "
      />

      {/* Button Content */}
      <span className="relative z-10">
        {children}
      </span>
    </a>
  );
}

export default Button;
