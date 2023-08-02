import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";
import Image from "next/image";
import React from "react";

const ProductsDetails = ({ allProducts }: any) => {
  return (
    <div className="my-20 px-5 flex justify-center">
      <div className="card card-compact shadow-xl lg:w-[50%]">
        <Image
          className="w-full h-[250px]"
          src={allProducts?.data?.image}
          width={500}
          height={250}
          alt="product image"
        />
        <div className="card-body">
          <h2 className="card-title text-xl">
            Product Name: {allProducts?.data?.productName}
          </h2>
          <h4 className="text-lg font-semibold text-slate-700">
            Category: {allProducts?.data?.category}
          </h4>
          <p className="text-lg text-slate-700">
            Price: {allProducts?.data?.price}
          </p>
          <p className="text-lg text-slate-700">
            Status: {allProducts?.data?.status}
          </p>
          <p className="text-lg text-slate-700">
            Rating: {allProducts?.data?.price}
          </p>
          <p className="text-lg text-slate-700">
            Description: The High-Performance Motherboard is a cutting-edge and
            feature-rich motherboard designed to cater to the needs of high-end
            gaming, content creation, and other resource-intensive tasks.
            Engineered with advanced technology and robust components, this
            motherboard provides exceptional performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://origin-pc-server.vercel.app/featured-products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product: any) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(
    `https://origin-pc-server.vercel.app/featured-products/products-details/${params.id}`
  );

  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

ProductsDetails.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
