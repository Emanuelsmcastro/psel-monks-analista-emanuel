import MonksImage from "@assets/monks-image.png";
import Logo from "@assets/logo.png";
import Scroll from "@assets/scroll.png";
import { fetchHeroLPSections } from "@services/wordpress";
import { HeroLPSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";

export default function HeroLPSection() {
  const emptyHeroLPSection: HeroLPSectionType = {
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
        },
      ],
    },
  };
  const [heroLPSection, setHeroLPSection] =
    useState<HeroLPSectionType>(emptyHeroLPSection);

  useEffect(() => {
    fetchHeroLPSections().then((data) => {
      setHeroLPSection(data[0]);
    });
  }, [setHeroLPSection]);

  return (
    <section
      id="hero-lp"
      className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr] rounded-b-3xl bg-[var(--bg-secundary)]"
    >
      <div className="pt-6 px-6 sm:pt-10 sm:px-10 lg:pl-10 flex flex-col justify-between">
        <div className="w-full flex flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center mb-6 sm:mb-10 lg:mb-14">
          <img src={Logo} alt="Logo" className="w-[140px] h-[24px]" />
          <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 sm:text-[18px] lg:text-[20px]">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-10 lg:mb-14">
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
