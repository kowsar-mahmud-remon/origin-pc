import Footer from "../Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
