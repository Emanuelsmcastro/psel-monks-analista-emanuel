import { fetchProductsSections } from "@services/wordpress";
import { GenericSectionType } from "../../types/globalTypes";
import { useEffect, useState } from "react";

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-3xl shadow-lg w-[317px] animate-pulse">
      <div className="w-[300px] h-[180px] bg-gray-300 rounded-2xl" />
      <div className="flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </div>
  );
}

function Product(props: {
  title: string;
  content: string;
  imageURL: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-3xl shadow-lg w-[317px]">
      <img
        src={props.imageURL}
        alt="Product"
        className="w-[317px] h-[180px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          {props.title}
        </h3>
        <p
          className="font-thin text-base sm:text-[18px] lg:text-[20px] tracking-[0.02em] leading-[1.4]"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></p>
      </div>
    </div>
  );
}

export default function Products() {
  const emptyProducts: GenericSectionType[] = [
    {
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
    },
  ];

  const [products, setProducts] = useState<GenericSectionType[]>(emptyProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsSections().then((data) => {
      if (!data || data.length > 0) {
        setProducts(data);
        setIsLoading(false);
      }
    });
  }, []);

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
      <div className="flex flex-wrap gap-4 justify-center pt-10">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => (
              <Product
                title={product.title.rendered}
                content={product.content.rendered}
                imageURL={product._embedded["wp:featuredmedia"]?.[0].source_url}
              />
            ))}
      </div>
    </section>
  );
}
