import { fetchCardsSection } from "@services/wordpress";
import { GenericSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  content: string;
  buttonText: string;
}

function CardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 max-w-xs w-full flex flex-col justify-between gap-6 animate-pulse">
      <div className="flex flex-col gap-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto" />
      </div>
      <div className="h-9 bg-gray-300 rounded w-1/2 mx-auto" />
    </div>
  );
}

function Card({ title, content, buttonText }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 max-w-xs flex flex-col justify-between gap-6">
      <div>
        <h3 className="font-bold text-lg mb-2 text-[var(--color-secundary)]">
          {title}
        </h3>
        <p
          className="text-sm text-[var(--color-secundary)]"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
      <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-4 py-2 rounded-md transition hover:bg-purple-300">
        {buttonText}
      </button>
    </div>
  );
}

export default function CardsSection() {
  const [cardsSection, setCardsSection] = useState<GenericSectionType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCardsSection().then((data) => {
      if (!data || data.length > 0) {
        setCardsSection(data);
        setLoading(false);
      }
    });
  }, []);
  return (
    <section
      id="cards-section"
      className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-primary)]"
    >
      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading
          ? Array(3)
              .fill(null)
              .map(() => <CardSkeleton />)
          : cardsSection.map((card) => (
              <Card
                title={card.title.rendered}
                content={card.content.rendered}
                buttonText="Lorem ipsum"
              />
            ))}
      </div>
    </section>
  );
}
