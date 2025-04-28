import Container from "@/components/Container";
import { IProductData } from "@/components/ProductItem";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import AddToCart from "@/components/AddToCart";

interface IDetailProps {
  params: { id: string };
  useParams: null;
}

async function ProductDetail(props: Promise<IDetailProps>) {
  const id = (await props).params.id;

  const result = await fetch(`http://localhost:8000/product/${id}`);
  const data = (await result.json()) as IProductData;

  return (
    <Container>
      <div className="mt-20 shadow-2xl border border-gray-300 rounded-2xl">
        <div className=" grid grid-cols-12 p-0">
          <div className="col-span-3 relative bg-">
            <Image
              src={data.image}
              alt="product image"
              width={300}
              height={1500}
              unoptimized
              className="w-full h-full rounded-l-2xl"
            />
            <BackButton />
          </div>
          <div className="col-span-9 rounded-r p-4 space-y-4">
            <h1 className="font-bold text-2xl">{data.title} </h1>
            <h5 className="text-gray-600">{data.description}</h5>
            <p className="mt-10 p-1 text-sm">
              Price: <span className="font-semibold">{data.price}$</span>
            </p>
            <AddToCart id={id} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
