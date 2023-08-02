import DetailsCard from "@/components/DetailsCard";
import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";
import React from "react";

const FeaturedCategory = ({ allProducts }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-5">
      {allProducts?.data?.map((product: any) => (
        // <ProductsCard key={product._id} products={product}></ProductsCard>
        <DetailsCard key={product._id} products={product}></DetailsCard>
      ))}
    </div>
  );
};

export default FeaturedCategory;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://origin-pc-server.vercel.app/featured-products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product: any) => ({
    params: { id: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(
    `https://origin-pc-server.vercel.app/featured-products/${params.id}`
  );

  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

FeaturedCategory.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
