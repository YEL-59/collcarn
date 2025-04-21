import Earth from "@/assets/svg/earth";

const Primarynav = () => {
  return (
    <>
      <div className="bg-white p-3 text-end flex justify-end items-end gap-5 ">
        <h1>About Us </h1>
        <h1>Our Story </h1>
        <h1>Partner with Us</h1>
        <h1>Contact Us</h1>
        <h1>EN/CN</h1>
        <Earth className="w-4 h-4" />
      </div>
    </>
  );
};

export default Primarynav;
