export default function CategoriesSection() {
  const categories = [
    "Perfumaria",
    "Corpo e banho",
    "Hidratante",
    "Desodorante",
    "Cabelos",
    "Maquiagem",
    "Rosto",
    "Casa",
    "Infantil",
    "Shampoo",
    "Sabonete",
    "Body splash",
    "Óleo corporal",
    "Corretivo",
    "Proteção solar",
  ];

  return (
    <section className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-primary)]">
      <div>
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-8">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="flex flex-wrap gap-4 max-w-5xl mx-auto align-center justify-center">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-purple-600 rounded-full text-purple-600 text-sm sm:text-base hover:bg-purple-100 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
