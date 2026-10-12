
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import logo from "../../assets/images/matka club.png";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070b14]">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px] sm:h-[450px] sm:w-[450px] lg:-right-40 lg:top-20 lg:h-[500px] lg:w-[500px]" />
      
      {/* ================= INFINITE DASHED BACKGROUND DESIGN ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Large rotating dashed circle */}
        <div className="absolute -right-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 animate-[spin_90s_linear_infinite] rounded-full border border-dashed border-blue-500/10 sm:-right-64 sm:h-[850px] sm:w-[850px] lg:-right-40 lg:h-[1000px] lg:w-[1000px]" />

        {/* Inner dashed circle - opposite direction */}
        <div className="absolute -right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 animate-[spin_65s_linear_infinite_reverse] rounded-full border border-dashed border-indigo-400/10 sm:-right-32 sm:h-[600px] sm:w-[600px] lg:-right-10 lg:h-[750px] lg:w-[750px]" />

        {/* Subtle animated dashed grid */}
        <div className="absolute inset-0 animate-[dashDrift_30s_linear_infinite] opacity-[0.12] [background-image:radial-gradient(#3b82f6_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
      </div>
      
      <Container>
        <div
          className="
            grid
            min-h-[auto]
            items-center
            gap-12
            py-16
            sm:py-20
            lg:min-h-[680px]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-4
            lg:py-20
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Eyebrow */}

            <div className="my-10 inline-flex items-center justify-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-blue-400 sm:text-[10px] lg:justify-start">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-blue-400 shadow-[0_0_10px_#3b82f6]" />
              Premium Matka Experience
            </div>

            {/* Heading */}
            <h1
              className="
                mx-auto
                max-w-[850px]
                text-[clamp(48px,12vw,105px)]
                font-black
                leading-[0.9]
                tracking-[-0.065em]
                sm:text-[clamp(58px,10vw,105px)]
                lg:mx-0
              "
            >
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                MATKA CLUB.
              </span>
            </h1>
            {/* Description */}
            <p
              className="
                mx-auto
                mt-7
                max-w-[560px]
                text-sm
                leading-7
                text-slate-400
                sm:mt-8
                sm:text-base
                lg:mx-0
              "
            >
              Experience a modern, responsive and premium Matka platform
              designed with a clean interface, smooth navigation and a powerful
              mobile-first experience.
            </p>
            {/* CTA */}
            <div className="mt-8 flex justify-center sm:mt-9 lg:justify-start">
              <Button
                href="/matkaclub.apk"
                className="px-8 py-4 text-xl sm:px-10 sm:py-5 sm:text-sm"
              >
                ↓ &nbsp; DOWNLOAD MATKA CLUB APP
              </Button>
            </div>
          </div>

          {/* ================= LOGO / CIRCLE ASSEMBLY ================= */}
          <div
            className="
              relative
              flex
              min-h-[390px]
              items-center
              justify-center
              animate-[float_6s_ease-in-out_infinite]
              sm:min-h-[480px]
              lg:min-h-[560px]
            "
          >
            {/* ================= OUTER ROTATING RING ================= */}
            <div
              className="
                absolute
                h-[270px]
                w-[270px]
                animate-[spin_18s_linear_infinite]
                rounded-full
                border
                border-dashed
                border-blue-400/40

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[430px]
                lg:w-[430px]
              "
            />

            {/* ================= INNER RING ================= */}
            <div
              className="
                absolute
                h-[235px]
                w-[235px]
                rounded-full
                border
                border-blue-400/20

                sm:h-[300px]
                sm:w-[300px]

                lg:h-[385px]
                lg:w-[385px]
              "
            />

            {/* ================= BLUE GLOW ================= */}
            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                bg-blue-500/20
                blur-[75px]

                sm:h-[300px]
                sm:w-[300px]
                sm:blur-[90px]

                lg:h-[350px]
                lg:w-[350px]
              "
            />

            {/* ================= MAIN LOGO CIRCLE ================= */}
            <div className="relative z-10">
              <div
                className="
                  relative
                  h-[210px]
                  w-[210px]
                  overflow-hidden
                  rounded-full
                  border-4
                  border-blue-500
                  bg-[#0e1422]
                  shadow-[0_0_60px_rgba(37,99,235,0.3)]

                  sm:h-[270px]
                  sm:w-[270px]
                  sm:shadow-[0_0_70px_rgba(37,99,235,0.3)]

                  lg:h-[350px]
                  lg:w-[350px]
                  lg:shadow-[0_0_80px_rgba(37,99,235,0.3)]
                "
              >
                <img
                  src={logo}
                  alt="Matka Club"
                  className="block h-full w-full scale-[0.85] object-contain"
                />
              </div>
            </div>

            {/* ================= ORBIT DOT ================= */}
            <div className="pointer-events-none absolute inset-0 animate-[spin_8s_linear_infinite]">
              <span
                className="
                  absolute
                  left-1/2
                  top-[calc(50%-135px)]
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_18px_#3b82f6]

                  sm:top-[calc(50%-170px)]
                  sm:h-3
                  sm:w-3

                  lg:top-[calc(50%-215px)]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
