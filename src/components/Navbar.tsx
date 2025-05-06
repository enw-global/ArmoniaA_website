import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const Navbar = () => {
  return (
    <header className="bg-black fixed h-18 flex flex-col justify-center w-full z-10">
      <nav className=" w-full">
        <div className="align-element flex flex-row justify-between items-center  px-4">
          <div className="bg-black  lg:w-12 lg:h-12"></div>
          {/* TODO: Implement a modal that will open upon clicking the a Mother Spark button */}
          <a href="/" className=" flex justify-center">
            <img
              src="/armonia_a_logo.png"
              alt="Armonia A logo"
              className="w-60 md:w-80 lg:w-full"
            />
          </a>
          <Dialog>
            <DialogTrigger>
              <img
                src="/a_Mother_Spark_button.png"
                alt="a Mother Modal"
                className=" a-mother-spark-button cursor-pointer w-[50%] md:w-[75%] lg:w-full"
              />
            </DialogTrigger>
            <DialogContent className="h-[375px] flex flex-col justify-between border-2">
              <DialogHeader className="border-2">
                <DialogTitle>5% of all proceeds go to a_Mother</DialogTitle>
              </DialogHeader>
              <DialogDescription className="border-2">
                <img src="/Logo.png" alt="" />
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
