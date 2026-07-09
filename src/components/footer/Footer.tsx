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
          {...Array.from({ length: 3 }).map((_, index) => {
            return (
              <img src={`/Logo${index + 1}.svg`} alt={`Logo ${index + 1}`} />
            );
          })}
          <img src="/Logo4.svg" alt="Logo 4" className="max-w-[75%]" />
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
