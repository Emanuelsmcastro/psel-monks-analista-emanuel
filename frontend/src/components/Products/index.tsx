function Product(props: { title: string; content: string; imageURL: string }) {
  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-3xl shadow-lg ">
      <img
        src={props.imageURL}
        alt="Product"
        className="w-full h-[180px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          {props.title}
        </h3>
        <p className="font-thin text-base sm:text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.4]">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="text-[var(--color-secundary)] px-6 pt-20">
      <div>
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="font-thin text-base sm:text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.4]">
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-start pt-10">
        <Product
          title="Test"
          content="Test2"
          imageURL="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Product
          title="Test"
          content="Test2"
          imageURL="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Product
          title="Test"
          content="Test2"
          imageURL="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Product
          title="Test"
          content="Test2"
          imageURL="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Product
          title="Test"
          content="Test2"
          imageURL="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </section>
  );
}
