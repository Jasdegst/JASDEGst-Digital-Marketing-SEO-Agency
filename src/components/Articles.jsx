import { useState } from "react";

export default function Articles() {
  const [showAll, setShowAll] = useState(false);

  const articles = [
    {
      title: "Apa Itu SEO dan Mengapa Penting Untuk Bisnis?",
      category: "SEO",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "Cara Membuat Website Bisnis Profesional",
      category: "Website",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Strategi Digital Marketing Tahun 2026",
      category: "Marketing",
      image: "/portfolio/project3.jpg",
    },
    {
      title: "Cara Meningkatkan Ranking Google",
      category: "SEO",
      image: "/portfolio/project4.jpg",
    },
    {
      title: "Optimasi Website Untuk UMKM",
      category: "Website",
      image: "/portfolio/project1.jpg",
    },
    {
      title: "Panduan Social Media Marketing",
      category: "Marketing",
      image: "/portfolio/project2.jpg",
    },
    {
      title: "Cara Membuat Landing Page yang Menjual",
      category: "Website",
      image: "/portfolio/project3.jpg",
    },
    {
      title: "Strategi Branding Untuk Bisnis Online",
      category: "Branding",
      image: "/portfolio/project4.jpg",
    },
  ];

  const limit = 6;

  const displayedArticles = showAll
    ? articles
    : articles.slice(0, limit);

  return (
    <section
      id="articles"
      className="
        py-24
        bg-slate-50
        dark:bg-slate-900
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-cyan-500 font-semibold">
            ARTICLES
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Artikel & Insight
          </h2>

          <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Tips SEO, website, dan digital marketing
            untuk membantu bisnis berkembang.
          </p>
        </div>

        {/* Artikel */}
        <div
          className="
            mt-20
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {displayedArticles.map((article, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                overflow-hidden
                bg-white
                dark:bg-white/5
                border
                border-black/10
                dark:border-white/10
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <img
                src={article.image}
                alt={article.title}
                className="
                  h-40
                  md:h-60
                  w-full
                  object-cover
                "
              />

              <div className="p-4 md:p-6">
                <span className="text-cyan-500 font-semibold text-sm">
                  {article.category}
                </span>

                <h3
                  className="
                    mt-3
                    font-bold
                    text-sm
                    md:text-xl
                    line-clamp-2
                  "
                >
                  {article.title}
                </h3>

                <button
                  className="
                    mt-4
                    text-cyan-500
                    font-semibold
                    text-sm
                  "
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol */}
        {articles.length > limit && (
          <div className="text-center mt-12">
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
                ? "Tutup Artikel ↑"
                : "Selengkapnya ↓"}
            </button>
          </div>
        )}

        {/* Video & Promo */}
        <div
          className="
            mt-24
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {/* YouTube */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              bg-white
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              p-5
              hover:-translate-y-2
              transition
            "
          >
            <h3 className="text-xl font-bold mb-4">
              🎥 Video Terbaru
            </h3>

            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube Video"
                allowFullScreen
              />
            </div>
          </div>

          {/* GIF */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              bg-white
              dark:bg-white/5
              border
              border-black/10
              dark:border-white/10
              p-5
              hover:-translate-y-2
              transition
            "
          >
            <h3 className="text-xl font-bold mb-4">
              🚀 Promo Kami
            </h3>

            <img
              src="/images/promo.gif"
              alt="Promo"
              className="
                w-full
                rounded-2xl
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
