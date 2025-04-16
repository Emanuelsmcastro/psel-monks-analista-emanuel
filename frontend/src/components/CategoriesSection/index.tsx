import { fetchCategoriesSection } from "@services/wordpress";
import { GenericSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";

export default function CategoriesSection() {
  const [categoriesSection, setCategoriesSection] = useState<
    GenericSectionType[]
  >([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoriesSection().then((data) => {
      if (!data || data.length > 0) {
        setCategoriesSection(data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <section className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-primary)]">
      <div>
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-8">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        {isLoading ? (
          <div className="flex flex-wrap gap-4 max-w-5xl mx-auto align-center justify-center">
            {Array(11)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-24 sm:w-28 bg-gray-300 rounded-full animate-pulse"
                ></div>
              ))}
          </div>
        ) : (
          <div
            className="flex flex-wrap gap-4 max-w-[80%] mx-auto align-center justify-center"
            dangerouslySetInnerHTML={{
              __html: categoriesSection[0].content.rendered,
            }}
          ></div>
        )}
      </div>
    </section>
  );
}
