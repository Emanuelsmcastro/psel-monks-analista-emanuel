import { fetchSimpleGallery } from "@services/wordpress";
import { GenericSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";

export default function SimpleGallery() {
  const [simpleGallery, setSimpleGallery] = useState<GenericSectionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSimpleGallery().then((data) => {
      if (!data || data.length > 0) {
        setSimpleGallery(data);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <section
      id="simple-gallery"
      className="text-[var(--color-secundary)] px-6 pt-20"
    >
      <div>
        {/* Título e descrição SEMPRE visíveis */}
        <div className="mb-8">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="font-thin text-base sm:text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>

        {/* Grid das imagens com skeleton ou conteúdo */}
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch animate-pulse">
            {/* Coluna esquerda */}
            <div className="lg:col-span-2 h-full">
              <div className="w-full h-[400px] bg-gray-300 rounded-3xl" />
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-6 h-full">
              <div className="w-full h-[195px] bg-gray-300 rounded-3xl" />
              <div className="w-full h-[195px] bg-gray-300 rounded-3xl" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2 h-full">
              {simpleGallery[0] && (
                <div className="flex items-start">
                  <img
                    src={
                      simpleGallery[0]._embedded["wp:featuredmedia"]?.[0]
                        .source_url
                    }
                    alt={
                      simpleGallery[0]._embedded["wp:featuredmedia"]?.[0]
                        .alt_text
                    }
                    className="w-full rounded-3xl object-fit"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6 h-full">
              {simpleGallery[1] && (
                <img
                  src={
                    simpleGallery[1]._embedded["wp:featuredmedia"]?.[0]
                      .source_url
                  }
                  alt={
                    simpleGallery[1]._embedded["wp:featuredmedia"]?.[0].alt_text
                  }
                  className="w-full h-1/2 rounded-3xl object-fit"
                />
              )}
              {simpleGallery[2] && (
                <img
                  src={
                    simpleGallery[2]._embedded["wp:featuredmedia"]?.[0]
                      .source_url
                  }
                  alt={
                    simpleGallery[2]._embedded["wp:featuredmedia"]?.[0].alt_text
                  }
                  className="w-full h-1/2 rounded-3xl object-fit"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
