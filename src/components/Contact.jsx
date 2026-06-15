import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-24
      bg-white
      dark:bg-slate-950
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="text-cyan-500 font-semibold">
            CONTACT
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Hubungi Kami
          </h2>

          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Mari diskusikan project dan kebutuhan bisnis Anda.
          </p>

        </div>

        <div
          className="
          mt-20
          grid
          lg:grid-cols-2
          gap-16
          "
        >
          {/* Informasi */}
          <div>

            <h3 className="text-2xl font-bold">
              Let's Work Together 🚀
            </h3>

            <p className="mt-6 text-gray-500 dark:text-gray-400">
              Kami siap membantu bisnis Anda berkembang
              melalui SEO, Website Development dan
              Digital Marketing.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-cyan-500" />
                <span>alhusaini124887@gmail.com</span>
              </div>

              <div className="flex gap-4 items-center">
                <FaWhatsapp className="text-cyan-500" />
                <span>+62 896 9178 0494</span>
              </div>

              <div className="flex gap-4 items-center">
                <FaMapMarkerAlt className="text-cyan-500" />
                <span>Indonesia</span>
              </div>

            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Nama"
              className="
              w-full
              p-4
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              "
            />

            <input
              type="email"
              placeholder="Email"
              className="
              w-full
              p-4
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              "
            />

            <textarea
              rows="6"
              placeholder="Pesan"
              className="
              w-full
              p-4
              rounded-2xl
              border
              border-black/10
              dark:border-white/10
              bg-transparent
              "
            />

            <button
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
              Kirim Pesan
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}