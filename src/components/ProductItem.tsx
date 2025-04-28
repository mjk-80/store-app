import Image from "next/image";

export interface IProductData {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

function ProductItem({ title, image, price }: IProductData) {
  return (
    <div className=" max-w-sm border border-gray-300 rounded overflow-hidden shadow-lg">
      <Image
        src={image}
        alt="product 1"
        width={400}
        height={200}
        unoptimized
        className="w-full"
      />

      <div className="px-4 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>

        <p className="text-gray-700 text-base tracking-tight">
          Price: {price}$
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
