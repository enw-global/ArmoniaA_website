const Navbar = () => {
  return (
    <header className="bg-black h-18 flex flex-col justify-center">
      <nav className=" w-full">
        <div className="align-element flex flex-row justify-between items-center  px-4">
          <div className="bg-black  w-12 h-12"></div>
          {/* TODO: Implement a modal that will open upon clicking the a Mother Spark button */}
          <a href="/" className=" flex justify-center">
            <img
              src="/armonia_a_logo.png"
              alt=""
              className="w-[160px] lg:w-full  "
            />
          </a>
          <img
            src="/a_Mother_Spark_button.png"
            alt=""
            className="a-mother-spark-button"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
