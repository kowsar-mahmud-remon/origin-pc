import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import React from "react";

const PcBuilderPage = ({ products }: any) => {
  const featuredProducts = products?.data?.slice(0, 6);
  return (
    <div className="grid grid-cols-3 gap-10 px-10 py-20">
      {featuredProducts.map((product: any) => (
        <div key={product?._id} className="card card-compact shadow-lg">
          <div className="card-body">
            <div className="flex justify-center">
              <h2 className="card-title text-xl">{product?.category}</h2>
            </div>
            <div className="card-actions justify-center mt-4">
              <Link href={`/featured-products/${product?.category}`}>
                <button className="btn btn-primary">Select</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PcBuilderPage;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/featured-products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

PcBuilderPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
