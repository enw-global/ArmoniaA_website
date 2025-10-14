import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from "../footer/Footer";

const Archive = () => {
  return (
    <div className="flex flex-col">
      <section className="h-screen w-full">
        <img
          src="/illustration.svg"
          alt="Illustration"
          className="opacity-[65%] w-full h-full object-cover"
        />
      </section>
      <section className="w-full flex items-center justify-end px-5 py-20">
        <img
          src="/AA_ARCHIVE.svg"
          alt="AA_ARCHIVE"
          className="max-w-[53vw] h-auto"
        />
      </section>
      <div id="archive-contents" className="px-4">
        <section className="pb-20 w-full justify-evenly text-armonia-sand font-bold">
          {/* Mobile Layout */}
          <div className="flex md:hidden justify-between">
            <div className="text-left">
              <h1>TITLE</h1>
            </div>
            <div className="text-left">
              <h1>YEAR</h1>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex text-[18px]">
            <div className="flex-1/2 text-left">
              <h1>TITLE</h1>
            </div>
            <div className="flex flex-1/2 lg:flex-1/6">
              <div className="flex-1 text-left">
                <h1>DATE</h1>
              </div>
              <div className="flex-1/12 text-left">
                <h1>PROJECT TYPE</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Accordion
            type="single"
            collapsible
            className="w-full text-armonia-sand"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="flex flex-1/2 lg:flex-1/6">
                    <div className="flex-1 hover:underline">
                      <span>March 2024</span>
                    </div>
                    <div className="flex-1/12 hover:underline">
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="flex flex-1/2 lg:flex-1/6">
                    <div className="flex-1 hover:underline">
                      <span>March 2024</span>
                    </div>
                    <div className="flex-1/12 hover:underline">
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="flex flex-1/2 lg:flex-1/6">
                    <div className="flex-1 hover:underline">
                      <span>March 2024</span>
                    </div>
                    <div className="flex-1/12 hover:underline">
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="flex flex-1/2 lg:flex-1/6">
                    <div className="flex-1 hover:underline">
                      <span>March 2024</span>
                    </div>
                    <div className="flex-1/12 hover:underline">
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Sample Project Title</span>
                  </div>
                  <div className="flex flex-1/2 lg:flex-1/6">
                    <div className="flex-1 hover:underline">
                      <span>March 2024</span>
                    </div>
                    <div className="flex-1/12 hover:underline">
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          
          </Accordion>
        </section>
        <section>
            <Footer />
        </section>
      </div>
    </div>
  );
};

export default Archive;
