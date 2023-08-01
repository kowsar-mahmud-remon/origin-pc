import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allProducts }: any) {
  const featuredProducts = allProducts?.data?.slice(0, 6);

  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.gamersnexus.net/images/media/2011/hardware/pc-build-bf3-slider.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Build Your PC</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 px-5">
        {featuredProducts?.map((product: any) => (
          <ProductsCard key={product._id} products={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featured-products");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
