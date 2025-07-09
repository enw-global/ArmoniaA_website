import Logo1 from "../../assets/logos/Logo_1.png";
import Logo2 from "../../assets/logos/Logo_2.png";
import Logo3 from "../../assets/logos/Logo_3.png";
import Logo4 from "../../assets/logos/Logo_4.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  let copyright = `© ${new Date().getFullYear()} armonia-a.com`;
  return (
    <footer className="h-screen flex flex-col bg-black">
      <div className="h-full justify-center items-center flex flex-1 ">
        <Newsletter />
      </div>
      <div className=" flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10 px-5 lg:px-10 place-items-center">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" className="max-w-[75%]" />
        </div>
      </div>

      <div className="text-[#686868] flex flex-col my-5 justify-center text-sm items-center leading-6  ">
        <p>Powered by European New Wave</p>
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
