import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProductData } from "./ProductItem";
import QtyButton from "./QtyButton";

interface IProductCart {
  id: number;
  qty: number;
}

function ProductCart({ id }: IProductCart) {
  const [data, setData] = useState({} as IProductData);

  useEffect(() => {
    axios(`http://localhost:8000/product/${id}`).then((result) => {
      const { data } = result;
      setData(data);
    });
  }, [id]);

  return (
    <div className="flex items-center bg-white border border-gray-200 p-4 rounded-lg shadow-sm mb-3">
      <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0">
        {data.image ? (
          <Image
            src={data.image}
            alt="product image"
            width={100}
            height={100}
            unoptimized
            className="w-full h-full rounded"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* اطلاعات محصول */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">{data.title}</h2>

        {/* تعداد و قیمت */}
        <div className="flex items-center justify-between mt-2">
          {/* تغییر تعداد */}
          <QtyButton {...data} />

          {/* قیمت */}
          <div className="text-lg font-bold">{data.price}$</div>
        </div>

        {/* دکمه‌های پایین */}
        <div className="flex gap-4 mt-3 text-sm">
          <button className="text-gray-500">
            <span className="text-black">🤍</span>Add to Favorites
          </button>
          <button className="text-red-500">❌Remove</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
