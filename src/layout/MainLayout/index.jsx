import Footer from "@/components/main/shared/footer";
import Navbar from "@/components/main/shared/navbar";
import Primarynav from "@/components/main/shared/primarynav";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <>
      <Primarynav />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
