import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";
import React from "react";

const FeaturedProductsPage = ({ allProducts }: any) => {
  const featuredProducts = allProducts?.data?.slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-5">
      {featuredProducts?.map((product: any) => (
        <ProductsCard key={product._id} products={product}></ProductsCard>
      ))}
    </div>
  );
};

export default FeaturedProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://origin-pc-server.vercel.app/featured-products"
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

FeaturedProductsPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
