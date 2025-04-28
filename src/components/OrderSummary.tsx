function OrderSummary() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-2 px-3 pt-4">
        Order summary
      </h1>
      <div className="space-y-3 mb-6 p-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Original price</span>
          <span className="text-gray-800">$7,592.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Savings</span>
          <span className="text-blue-600">-$299.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Store Pickup</span>
          <span className="text-gray-800">$99</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="text-gray-800">$799</span>
        </div>
      </div>

      <div className="border-t border-gray-200 p-3 mb-6">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$8,191.00</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="px-5  bg-green-950 text-white py-3 rounded-xl font-medium hover:bg-green-900 mb-3">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
