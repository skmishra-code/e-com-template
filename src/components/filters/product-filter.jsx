import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ProductFilter = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ProductFilter