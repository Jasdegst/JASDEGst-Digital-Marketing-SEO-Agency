import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { dark } = useTheme();

  return (
    <section
      id="hero"
      className="
      min-h-screen
      flex
      items-center
      bg-white
      dark:bg-slate-950
      pt-24
      overflow-hidden
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-16
        items-center
      "
      >
        {/* Kiri */}
        <div>
          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            text-cyan-500
            border
            border-cyan-500/20
          "
          >
            🚀 Digital Marketing Agency
          </span>

          <h1
            className="
            mt-8
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          "
          >
            Grow Your
            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-indigo-500
              bg-clip-text
              text-transparent
            "
            >
              {" "}Business Online
            </span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-gray-500
            dark:text-gray-400
            max-w-xl
          "
          >
            JASDEGst membantu bisnis berkembang melalui
            SEO, Website Development, Branding dan
            Digital Marketing yang modern dan profesional.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
  href="#contact"
  className="
    inline-block
    px-8
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    to-indigo-500
    text-white
    hover:scale-105
    transition
  "
>
  Get Started
</a>

            <a
  href="#projects"
  className="
    inline-block
    px-8
    py-4
    rounded-2xl
    border
    border-gray-300
    dark:border-white/20
    hover:bg-black/5
    dark:hover:bg-white/5
    transition
  "
>
  View Portfolio
</a>
          </div>

          {/* Statistik */}
          <div
            className="
            mt-14
            grid
            grid-cols-3
            gap-8
          "
          >
            <div>
              <h3 className="text-3xl font-bold text-cyan-500">
                120+
              </h3>
              <p className="text-gray-500">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-500">
                250+
              </h3>
              <p className="text-gray-500">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-500">
                98%
              </h3>
              <p className="text-gray-500">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Kanan */}
<div
  className="
  flex
  justify-center
  relative
"
>
  <div
    className="
    absolute
    w-96
    h-96
    rounded-full
    bg-cyan-500
    blur-[150px]
    opacity-20
  "
  />

  <img 
    src={
      dark
      ? "public/images/logo-white1.png"
      : "public/images/logo-black1.png"
    }
    alt="JASDEGst"
    className="
  relative
  w-72
  md:w-96
  drop-shadow-2xl
  transition-all
  duration-500
  hover:scale-105
"
  />
</div>
      </div>
    </section>
  );
}