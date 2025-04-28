import { useCart } from "@/app/context/cartcontext";

import { IAdd } from "./AddToCart";

function QtyButton({ id }: IAdd) {
  const { handleDecrease, getProductQty, handleIncrease } = useCart();

  return (
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
  );
}

export default QtyButton;
