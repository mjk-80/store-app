import Image from "next/image";

function ProductCart() {
  return (
    <div className="flex items-center bg-white border border-gray-200 p-4 rounded-lg shadow-sm mb-3">
      <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0">
        <Image
          src={
            "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbWV8ZW58MHx8MHx8fDA%3D"
          }
          alt="product image"
          width={100}
          height={100}
          unoptimized
          className="w-full h-full rounded"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">Rome Italy</h2>

        {/* تعداد و قیمت */}
        <div className="flex items-center justify-between mt-2">
          {/* تغییر تعداد */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 bg-gray-300 rounded">-</button>
            <span>2</span>
            <button className="w-8 h-8 bg-gray-300 rounded">+</button>
          </div>

          {/* قیمت */}
          <div className="text-lg font-bold">$1,499</div>
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
