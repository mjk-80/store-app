import Container from "@/components/Container";
import Discount from "@/components/Discount";
import OrderSummary from "@/components/OrderSummary";
import ProductCart from "@/components/ProductCart";

function CartPage() {
  return (
    <Container>
      <div className=" min-h-screen  p-6 mt-5 rounded-2xl">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4 ">
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
          <div className="space-y-4">
            <div className=" rounded-xl bg-white border border-gray-200 shadow-xl">
              <OrderSummary />
            </div>
            <div className=" rounded-xl bg-white border border-gray-200 shadow-xl">
              <Discount />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CartPage;
