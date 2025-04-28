"use client";

import { useCart } from "@/app/context/cartcontext";

interface IAdd {
  id: string;
}

function AddToCart({ id }: IAdd) {
  const { cartItem, handleIncrease, handleDecrease, getProductQty } = useCart();
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
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDecrease(parseInt(id))}
            className="w-8 h-8 bg-gray-300 rounded"
          >
            -
          </button>
          <span>{getProductQty(parseInt(id))}</span>
          <button
            onClick={() => handleIncrease(parseInt(id))}
            className="w-8 h-8 bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
