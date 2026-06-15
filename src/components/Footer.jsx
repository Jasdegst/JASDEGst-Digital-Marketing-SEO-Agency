import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      py-16
      border-t
      border-black/10
      dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-10
          "
        >
          {/* Logo */}
          <div>

            <h2
              className="
              text-3xl
              font-bold
              text-cyan-500
              "
            >
              JASDEGst
            </h2>

            <p className="mt-4 text-gray-500">
              Digital Marketing & SEO Agency.
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="font-bold">
              Menu
            </h3>

            <ul className="mt-4 space-y-3">

              <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#articles">Blog</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3 className="font-bold">
              Social Media
            </h3>

            <div className="flex gap-4 mt-4 text-2xl">

              <a
 href="https://web.facebook.com/profile.php?id=61590581370170"
 target="_blank"
>
  <FaFacebook />
</a>
<a
 href="https://www.instagram.com/jasdeg_st/"
 target="_blank"
>
  <FaInstagram />
</a>

    <a
 href="https://www.linkedin.com/in/al-husaini-aa8381240/"
 target="_blank"
>
  <FaLinkedin />
</a>          
              
              <a
 href="https://api.whatsapp.com/send/?phone=6289691780494"
 target="_blank"
>
  <FaWhatsapp />
</a>
              

            </div>

          </div>

        </div>

        <div
          className="
          mt-12
          pt-8
          border-t
          border-black/10
          dark:border-white/10
          text-center
          text-gray-500
          "
        >
          © 2026 JASDEGst. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}