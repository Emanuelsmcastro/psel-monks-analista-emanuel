import ContactImage from "@assets/contact-img.png";

export default function ContactSection() {
  return (
    <section className="text-[var(--color-secundary)] px-6 pt-20 bg-[var(--bg-secundary)] mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-center p-8 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={ContactImage}
            alt="Ilustração"
            className="max-w-xs w-full"
          />
        </div>

        <div className="flex flex-col gap-6 bg-[var(--bg-primary)] p-6 rounded-2xl">
          <div>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--color-secundary)]">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque
            </p>
          </div>

          <span className="text-xs text-gray-500 italic">
            *Lorem ipsum dolor sit amet consectetur
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Categoria*"
              className="px-4 py-2 rounded-md bg-white text-sm border border-gray-300"
            />
            <input
              type="text"
              placeholder="Categoria*"
              className="px-4 py-2 rounded-md bg-white text-sm border border-gray-300"
            />
            <input
              type="text"
              placeholder="Categoria"
              className="px-4 py-2 rounded-md bg-white text-sm border border-gray-300"
            />
            <input
              type="text"
              placeholder="Categoria"
              className="px-4 py-2 rounded-md bg-white text-sm border border-gray-300"
            />
          </div>

          <div className="flex flex-row gap-8 items-center">
            <span className="font-semibold">Verificação de segurança</span>
            <div className="flex items-center gap-2 bg-[#DFDCD5] p-2 rounded-md">
              <span className="text-purple-600 font-semibold">427</span>
              <span>+</span>
              <span className="text-purple-600 font-semibold">628</span>
            </div>
            <span>=</span>
            <input
              type="text"
              placeholder="Resultado*"
              className="flex-1 px-4 py-2 rounded-md bg-white text-sm border border-gray-300"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-200 text-purple-800 font-semibold text-sm px-6 py-2 rounded-md transition hover:bg-purple-300">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
