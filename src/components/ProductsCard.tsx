import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ products }: any) => {
  return (
    <div className="card card-compact shadow-xl">
      <Image
        className="w-full h-[250px]"
        src={products?.image}
        width={500}
        height={250}
        alt="product image"
      />
      <div className="card-body">
        <h2 className="card-title text-xl">
          Product Name: {products?.productName}
        </h2>
        <h4 className="text-lg font-semibold text-slate-700">
          Category: {products?.category}
        </h4>
        <p className="text-lg text-slate-700">Price: {products?.price}</p>
        <p className="text-lg text-slate-700">Status: {products?.status}</p>
        <p className="text-lg text-slate-700">Rating: {products?.price}</p>
        <div className="card-actions justify-center mt-4">
          <Link href={`/featured-products/${products?.category}`}>
            <button className="btn btn-primary">Show More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
