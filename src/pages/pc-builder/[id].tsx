import DetailsCard from "@/components/DetailsCard";
import RootLayout from "@/components/Layout/RootLayout";
import PcBuilderCard from "@/components/PcBuilderCard";
import ProductsCard from "@/components/ProductsCard";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const FeaturedCategory = ({ products }: any) => {
  const handleToast = () => {
    toast.success("Successful");
  };
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-5">
        {products?.data?.map((product: any) => (
          <PcBuilderCard key={product._id} products={product}></PcBuilderCard>
        ))}
      </div>
      <div className="my-20 flex justify-center">
        <Link href="/pc-builder" onClick={() => handleToast()}>
          <button className="btn btn-secondary px-10">Add To Builder</button>
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default FeaturedCategory;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(
    `https://origin-pc-server.vercel.app/featured-products/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

FeaturedCategory.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
