import React, { useEffect, useState } from "react";
import Product from "./product-card";
import ReactPaginate from "react-paginate";

// function to create a list of products card
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="w-full">
            <Product
              id={item.id}
              image={item.images[1]}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
    </>
  );
}

const ProductSection = ({ itemsPerPage }) => {
  // get products
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    getProducts();
  }, []);

  // Setting offset and start
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  
  // products in current page
  const currentItems = products?.slice(itemOffset, endOffset);
  // page count defends on 
  const pageCount = Math.ceil(products?.length / 12); 

  // handle to change page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-cols xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        {/* React pagination components */}
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {products?.length}
        </p>
      </div>
    </div>
  );
};

export default ProductSection;
