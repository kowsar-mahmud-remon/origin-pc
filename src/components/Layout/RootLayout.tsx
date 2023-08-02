import { SessionProvider } from "next-auth/react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </SessionProvider>
    </>
  );
};
export default RootLayout;
