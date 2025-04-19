import AppStoreImg from "@assets/appstore.png";
import GooglePlayImg from "@assets/googleplay.png";

export default function AppSection() {
  return (
    <section className="px-6 py-10">
      <div className="bg-[#3C0C60] text-white rounded-2xl px-10 py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Texto */}
        <div className="text-center lg:text-left max-w-[900px]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-base sm:text-[18px] lg:text-[20px] font-thin leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo aenean viverra
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <img
            src={AppStoreImg}
            alt="Disponível na App Store"
            className="h-[50px] w-auto object-fit"
          />
          <img
            src={GooglePlayImg}
            alt="Disponível no Google Play"
            className="h-[50px] w-auto object-fit"
          />
        </div>
      </div>
    </section>
  );
}
