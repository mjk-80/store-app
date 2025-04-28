import Container from "@/components/Container";
import ProductItem, { IProductData } from "@/components/ProductItem";
import Link from "next/link";

async function Store() {
  const result = await fetch("http://localhost:8000/product");
  const data = (await result.json()) as IProductData[];

  return (
    <Container>
      <div className="mb-10">
        <h1 className="font-bold text-2xl pb-4 pt-4">Store</h1>
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <Link
              className="hover:shadow-2xl"
              key={item.id}
              href={`/store/${item.id}`}
            >
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Store;
