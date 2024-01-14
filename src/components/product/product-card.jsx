const Product = ({ image, price, title, id }) => {
  return (
    <div className="flex flex-col w-full relative group h-full border-[1px] border-zinc-200 hover:scale-105 cursor-pointer transition hover:shadow-xl">
      {/* Image div */}
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <div className="h-full w-full">
          <img src={image} className="object-fit h-full w-full" />
        </div>
      </div>
      {/* Details div */}
      <div className="max-w-80 py-6 flex flex-col gap-1  border-t-0 px-4 bg-white mt-auto">
        <div className="flex items-center justify-between font-titleFont">
          {/* Title */}
          <h2 className="text-lg text-primeColor font-bold pr-2">{title}</h2>
          <p className="text-blue-500 text-lg">${price}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
