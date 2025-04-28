import React from "react";

function Discount() {
  return (
    <div className="p-3 mb-2">
      <p className="text-gray-600 mb-2">Do you have a voucher or gift card?</p>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder=" Enter discount code.."
          className="border border-gray-300 rounded py-2"
        />
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white rounded-xl px-3 py-2 hover:bg-blue-600">
            Apply Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discount;
