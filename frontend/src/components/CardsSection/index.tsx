interface CardProps {
  title: string;
  content: string;
  buttonText: string;
}

function Card({ title, content, buttonText }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 max-w-xs flex flex-col justify-between gap-6">
      <div>
        <h3 className="font-bold text-lg mb-2 text-[var(--color-secundary)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-secundary)]">{content}</p>
      </div>
      <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-4 py-2 rounded-md transition hover:bg-purple-300">
        {buttonText}
      </button>
    </div>
  );
}

export default function CardsSection() {
  return (
    <section
      id="cards-section"
      className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-primary)]"
    >
      <div className="flex flex-wrap gap-6 justify-center">
        <Card
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
          buttonText="Lorem ipsum"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
          buttonText="Lorem ipsum"
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
          buttonText="Lorem ipsum"
        />
      </div>
    </section>
  );
}
