"use client";

import { useCart } from "@/app/context/cartcontext";
import QtyButton from "./QtyButton";

export interface IAdd {
  id: string;
  qty?: number;
}

function AddToCart({ id }: IAdd) {
  const { cartItem, handleIncrease, getProductQty } = useCart();
  console.log(cartItem);

  return (
    <div>
      {!getProductQty(parseInt(id)) ? (
        <div>
          <button
            onClick={() => handleIncrease(parseInt(id))}
            className="px-3 py-1 bg-green-950 text-white text-sm rounded-2xl"
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <QtyButton id={id} />
      )}
    </div>
  );
}

export default AddToCart;
