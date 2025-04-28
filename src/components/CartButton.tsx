import { useCart } from "@/app/context/cartcontext";

function CartButton() {
  const { cartTotalQty } = useCart();

  return (
    <div>
      <button className="bg-green-950 text-white rounded-2xl px-3 py-1 text-sm cursor-pointer">
        Cart{" "}
        {cartTotalQty ? (
          <span className="bg-white rounded-4xl text-black px-1">
            {cartTotalQty}
          </span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}

export default CartButton;
