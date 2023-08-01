import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";
import React from "react";

const FeaturedCategory = ({ allProducts }: any) => {
  console.log({ allProducts });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-5">
      {allProducts?.data?.map((product: any) => (
        <ProductsCard key={product._id} products={product}></ProductsCard>
      ))}
    </div>
  );
};

export default FeaturedCategory;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/featured-products");
  const products = await res.json();
  console.log({ products });

  const paths = products?.data?.map((product: any) => ({
    params: { id: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  console.log({ params });
  const res = await fetch(
    `http://localhost:5000/featured-products/${params.id}`
  );

  // const res = await fetch("http://localhost:5000/featured-products");
  const data = await res.json();
  // console.log(data);
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
