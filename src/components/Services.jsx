import {
  FaRocket,
  FaGlobe,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaRocket />,
      title: "SEO Optimization",
      desc: "Meningkatkan ranking website di Google."
    },
    {
      icon: <FaGlobe />,
      title: "Digital Marketing",
      desc: "Menjangkau lebih banyak pelanggan."
    },
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Membangun website modern dan cepat."
    },
    {
      icon: <FaPalette />,
      title: "Branding Design",
      desc: "Membangun identitas bisnis yang kuat."
    }
  ];

  return (
    <section
      id="services"
      className="
      py-24
      bg-slate-50
      dark:bg-slate-900
      transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Judul */}
        <div className="text-center">

          <span
            className="
            text-cyan-500
            font-semibold
            "
          >
            OUR SERVICES
          </span>

          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Solusi Digital Lengkap
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-500
            dark:text-gray-400
            "
          >
            Kami membantu bisnis berkembang
            melalui website, SEO, branding,
            dan digital marketing profesional.
          </p>

        </div>

        {/* Card */}
        <div
          className="
          mt-20
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
              group
              p-8
              rounded-3xl
              border
              border-black/10
              dark:border-white/10
              bg-white
              dark:bg-white/5
              hover:-translate-y-3
              hover:border-cyan-500
              transition
              duration-300
              shadow-lg
              "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
                text-cyan-500
                text-3xl
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                mt-8
                text-xl
                font-bold
                "
              >
                {service.title}
              </h3>

              <p
                className="
                mt-4
                text-gray-500
                dark:text-gray-400
                "
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}