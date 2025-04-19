import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[var(--bg-secundary)] text-white py-10">
      <div className="border-t border-purple-200 w-[90%] mx-auto mb-6" />

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6 text-xl">
          <FaInstagram className="hover:text-purple-300 transition" />
          <FaWhatsapp className="hover:text-purple-300 transition" />
          <FaTwitter className="hover:text-purple-300 transition" />
          <FaFacebookF className="hover:text-purple-300 transition" />
        </div>

        <p className="font-semibold text-sm sm:text-base">
          Lorem ipsum dolor sit amet
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          <a href="#" className="hover:underline">
            Lorem ipsum
          </a>
          <a href="#" className="hover:underline">
            Lorem ipsum
          </a>
          <a href="#" className="hover:underline">
            Lorem ipsum
          </a>
          <a href="#" className="hover:underline">
            Lorem ipsum
          </a>
        </div>
      </div>
    </footer>
  );
}
