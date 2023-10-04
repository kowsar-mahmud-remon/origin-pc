import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const PcBuilderPage = ({ products }: any) => {
  const featuredProducts = products?.data?.slice(0, 6);

  const handleToast = () => {
    toast.success("Successful");
  };
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-10 px-10 py-20">
        {featuredProducts.map((product: any) => (
          <div key={product?._id} className="card card-compact shadow-lg">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title text-xl">{product?.category}</h2>
              </div>
              <div className="card-actions justify-center mt-4">
                <Link href={`/pc-builder/${product?.category}`}>
                  <button className="btn btn-primary">Select</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 flex justify-center">
        <Link href="/" onClick={() => handleToast()}>
          <button className="btn btn-secondary px-10">Complete Build</button>
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default PcBuilderPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://origin-pc-server.vercel.app/featured-products"
  );
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
