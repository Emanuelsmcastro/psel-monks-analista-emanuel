import MonksImage from "@assets/monks-image.png";
import Logo from "@assets/logo.png";
import Scroll from "@assets/scroll.png";
import { fetchHeroLPSections } from "@services/wordpress";
import { GenericSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function HeroLPSection() {
  const emptyHeroLPSection: GenericSectionType = {
    id: 0,
    title: {
      rendered: "",
    },
    content: {
      rendered: "",
    },
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url: "",
          alt_text: "",
        },
      ],
    },
  };
  const [heroLPSection, setHeroLPSection] =
    useState<GenericSectionType>(emptyHeroLPSection);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchHeroLPSections().then((data) => {
      if (!data || data.length > 0) {
        setHeroLPSection(data[0]);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <section
      id="hero-lp"
      className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr] rounded-b-3xl bg-[var(--bg-secundary)]"
    >
      <div className="pt-6 px-6 sm:pt-10 sm:px-10 xl:pl-10 flex flex-col justify-between">
        <div className="flex items-center justify-between px-4 sm:px-6 xl:px-10">
          <img src={Logo} alt="Logo" className="w-[140px] h-[24px]" />

          {/* Menu tradicional - visível até lg */}
          <ul className="hidden xl:flex flex-wrap gap-6 text-[18px]">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>

          {/* Menu hambúrguer - visível em xl e acima */}
          <button
            className="xl:hidden text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="absolute w-full left-0 top-20 flex flex-col gap-4 text-base xl:hidden bg-[#DFBBFE] text-black p-4 rounded-xl shadow-md mt-4">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
        )}

        <div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-10 lg:mb-14 pt-20">
          {isLoading ? (
            <>
              <div className="h-6 w-1/2 bg-gray-600 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse" />
            </>
          ) : (
            <>
              <h1
                className="font-bold text-xl sm:text-2xl lg:text-3xl"
                dangerouslySetInnerHTML={{
                  __html: heroLPSection?.title.rendered,
                }}
              ></h1>
              <p
                className="font-thin text-base sm:text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.4]"
                dangerouslySetInnerHTML={{
                  __html: heroLPSection?.content.rendered,
                }}
              ></p>
            </>
          )}
        </div>

        <div className="flex justify-center p-4">
          <img src={Scroll} alt="scroll" />
        </div>
      </div>

      <div className="h-full lg:block hidden">
        <img
          src={MonksImage}
          alt="Banner"
          className="w-full h-full object-fit"
        />
      </div>
    </section>
  );
}
