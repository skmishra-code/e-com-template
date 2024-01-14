import React from "react";
import ProductFilter from "../components/filters/product-filter";
import ProductBanner from "../components/product/product-banner";
import ProductSection from "../components/product/product-section";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/header/Navbar";

const ShopPage = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto py-10">
        <div className="w-full h-full flex pb-20 gap-3">
          {/* Categories */}
          <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full px-6 py-4 bg-white">
            <ProductFilter />
          </div>
          <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10 px-3 py-2">
            <ProductBanner itemsPerPageFromBanner={12} />
            <ProductSection itemsPerPage={12} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopPage;
