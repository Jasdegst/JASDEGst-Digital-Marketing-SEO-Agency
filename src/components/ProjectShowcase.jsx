import { useState } from "react";

const projects = [
  {
    title: "Company Profile Website",
    description:
      "Website company profile modern, responsif, dan SEO Friendly untuk meningkatkan branding bisnis.",
    image: "/portfolio/mockup1.png",
    technologies: ["React", "Tailwind", "SEO"],
  },
  {
    title: "Landing Page Product",
    description:
      "Landing page profesional dengan performa tinggi dan optimasi konversi pelanggan.",
    image: "/portfolio/mockup2.png",
    technologies: ["React", "Marketing", "UI/UX"],
  },
  {
    title: "Digital Agency Website",
    description:
      "Website agency modern dengan desain premium dan optimasi performa.",
    image: "/portfolio/mockup3.png",
    technologies: ["React", "Tailwind", "Branding"],
  },
  {
    title: "E-Commerce Website",
    description:
      "Website toko online responsif dengan pengalaman pengguna yang modern.",
    image: "/portfolio/mockup4.png",
    technologies: ["React", "E-Commerce", "SEO"],
  },
];

export default function ProjectShowcase() {
  const [showAll, setShowAll] = useState(false);

  const featuredProject = projects[0];

  return (
    <section
      id="projects"
      className="
        relative
        py-32
        bg-white
        dark:bg-slate-950
        border-y
        border-black/10
        dark:border-white/10
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-cyan-500/10
          rounded-full
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-28">
          <span className="text-cyan-500 font-semibold">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Project Unggulan Kami
          </h2>

          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Beberapa project yang telah kami kerjakan untuk membantu
            bisnis berkembang secara digital.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="
                w-full
                max-w-2xl
                hover:scale-105
                transition
                duration-500
                drop-shadow-2xl
              "
            />
          </div>

          <div>
            <span className="text-cyan-500 font-semibold">
              FEATURED PROJECT
            </span>

            <h3 className="mt-4 text-4xl font-bold">
              {featuredProject.title}
            </h3>

            <p
              className="
                mt-8
                text-lg
                text-gray-500
                dark:text-gray-400
                leading-8
              "
            >
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/5
                    border
                    border-black/10
                    dark:border-white/10
                    text-cyan-500
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
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
            {showAll
              ? "Tutup Project ↑"
              : "Selengkapnya ↓"}
          </button>
        </div>

        {/* More Projects */}
        {showAll && (
          <div className="mt-32 space-y-40">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className={`
                  grid
                  lg:grid-cols-2
                  gap-20
                  items-center
                  ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >
                {/* Mockup */}
                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      max-w-2xl
                      hover:scale-105
                      transition
                      duration-500
                      drop-shadow-2xl
                    "
                  />
                </div>

                {/* Content */}
                <div>
                  <span className="text-cyan-500 font-semibold">
                    PROJECT {index + 2}
                  </span>

                  <h3 className="mt-4 text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-8
                      text-lg
                      text-gray-500
                      dark:text-gray-400
                      leading-8
                    "
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/5
                          border
                          border-black/10
                          dark:border-white/10
                          text-cyan-500
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}