import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Footer from "../footer/Footer";
import { CelebratingRosemary, Temp1, Temp2, Temp3 } from "../images";
import { useState } from "react";

const Archive = () => {
  // Array of available images
  const archiveImages = [Temp1, Temp2, Temp3];

  // State for mobile description accordion
  const [showMobileDescription, setShowMobileDescription] = useState<
    string | null
  >(null);

  const peopleInvolved = [
    "Christian Noye",
    "Mohammed Rahman",
    "Din Trota",
    "Zahra Nawaz",
    "Joshua Capito",
    "Sahif Rahman",
    "Nick Charambira",
    "Maxwell Nuerty",
    "Jeremicko Onrubia",
  ];

  // Helper function to toggle mobile description
  const toggleMobileDescription = (itemId: string) => {
    setShowMobileDescription(showMobileDescription === itemId ? null : itemId);
  };

  // Reusable mobile description toggle component
  const MobileDescriptionToggle = ({
    itemId,
    projectType,
    children,
  }: {
    itemId: string;
    projectType: string;
    children: React.ReactNode;
  }) => (
    <>
      <div className="md:hidden">
        <button
          onClick={() => toggleMobileDescription(itemId)}
          className="flex items-center justify-between w-full text-armonia-sand font-bold text-lg hover:opacity-80 transition-opacity"
          aria-label={
            showMobileDescription === itemId
              ? "Hide project description"
              : "Show project description"
          }
        >
          <span>{projectType}</span>
          <span className="text-2xl min-w-[1.5rem] text-center">
            {showMobileDescription === itemId ? "−" : "+"}
          </span>
        </button>

        {showMobileDescription === itemId && (
          <div className="mt-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {children}
          </div>
        )}
      </div>
    </>
  );

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
                <div className="relative w-full">
                  <Carousel className="w-full">
                    <CarouselContent className="flex items-start">
                      <CarouselItem className="flex-none mr-4">
                        <Card className="w-auto p-0 border-0">
                          <CardContent className="p-0">
                            <img
                              src={CelebratingRosemary}
                              alt="Celebrating Rosemary"
                              className="w-auto object-contain max-h-[80vh] max-w-full"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </div>
                {/* Mobile: Show/Hide Title */}
                <div>
                  {/* Mobile: Show/Hide Description */}
                  <MobileDescriptionToggle itemId="item-1" projectType="Community Outreach">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </MobileDescriptionToggle>
                </div>

                {/* Desktop: Always visible description */}
                <div className="hidden md:flex flex-col gap-4">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Item 2 */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                {/* Mobile Layout */}
                <div className="flex md:hidden justify-between w-full text-left">
                  <div className="hover:underline">
                    <span>Momentous</span>
                  </div>
                  <div className="hover:underline">
                    <span>2024</span>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex w-full text-left text-[18px]">
                  <div className="flex-1/2 hover:underline">
                    <span>Momentous</span>
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
                <div className="relative w-full">
                  <Carousel className="w-full">
                    <CarouselContent className="flex items-start">
                      {archiveImages.map((imageSrc, index) => (
                        <CarouselItem key={index} className="flex-none mr-4">
                          <Card className="w-auto p-0 border-0">
                            <CardContent className="p-0">
                              <img
                                src={imageSrc}
                                alt={`Archive project ${index + 1}`}
                                className="w-auto object-contain max-h-[80vh] max-w-full"
                                style={{
                                  height: "auto",
                                  display: "block",
                                }}
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </div>

                {/* Mobile: Show/Hide Description */}
                <MobileDescriptionToggle itemId="item-2" projectType="Web Design">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius doloribus earum eos praesentium et! Neque, laboriosam
                    voluptatibus. Repellendus alias voluptatibus explicabo,
                    deserunt eius eos sunt odio expedita, dolor nihil quibusdam
                    maxime vitae cumque ipsum aperiam iste excepturi ab itaque
                    quisquam! Quidem quis cum saepe! Libero ipsum, possimus illo
                    sit asperiores, voluptas id inventore maiores quasi,
                    consequatur alias explicabo exercitationem veniam neque
                    voluptate iusto quas rerum beatae ab numquam in ea tempora
                    magni?
                  </p>
                  <div id="credits-section" className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Credits:</h3>
                    <ul className="flex flex-row flex-wrap gap-2">
                      {peopleInvolved.map((person, index) => (
                        <li
                          key={index}
                          className="bg-neutral-700 px-3 py-1 rounded-full text-sm"
                        >
                          {person}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MobileDescriptionToggle>

                {/* Desktop: Always visible description */}
                <div className="hidden md:flex w-full flex-row gap-7 justify-between">
                  <p className="flex-1/2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius doloribus earum eos praesentium et! Neque, laboriosam
                    voluptatibus. Repellendus alias voluptatibus explicabo,
                    deserunt eius eos sunt odio expedita, dolor nihil quibusdam
                    maxime vitae cumque ipsum aperiam iste excepturi ab itaque
                    quisquam! Quidem quis cum saepe! Libero ipsum, possimus illo
                    sit asperiores, voluptas id inventore maiores quasi,
                    consequatur alias explicabo exercitationem veniam neque
                    voluptate iusto quas rerum beatae ab numquam in ea tempora
                    magni? Dolorum, quidem doloribus temporibus porro incidunt
                    deleniti corrupti, omnis explicabo laudantium nam sit nulla?
                    Quidem dolore officiis reiciendis. Sit, omnis ad nulla minus
                    eos aliquid voluptatibus quisquam pariatur?
                  </p>
                  <p className="flex-1/2 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint odio voluptates eaque harum asperiores, excepturi, ut
                    ullam recusandae nostrum sequi eos minus? Nesciunt
                    dignissimos facilis nisi fuga? Exercitationem harum nihil
                    cum praesentium eligendi dignissimos voluptatibus beatae
                    ratione, ea id quasi magnam mollitia dolore atque sequi
                    reprehenderit qui obcaecati autem quos veritatis explicabo
                    error. Illo, hic dolorem temporibus officiis animi error,
                    reprehenderit nobis dignissimos dolor perspiciatis, itaque
                    repellat magnam! Ex ipsam similique culpa rerum in
                    voluptatem blanditiis alias! Autem voluptatum unde, ratione
                    quam asperiores eaque voluptates eos magnam recusandae
                    praesentium error nisi perferendis ipsum nostrum harum,
                    corrupti obcaecati aspernatur possimus minima!
                  </p>
                </div>
                <div
                  id="credits-section"
                  className="hidden md:flex flex-row gap-2"
                >
                  <h3 className="font-bold text-lg">Credits:</h3>
                  <ul className="flex flex-row flex-wrap gap-2">
                    {peopleInvolved.map((person, index) => (
                      <li
                        key={index}
                        className="bg-neutral-700 px-3 py-1 rounded-full"
                      >
                        {person}
                      </li>
                    ))}
                  </ul>
                </div>
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
                {/* Mobile: Show/Hide Description */}
                <MobileDescriptionToggle itemId="item-3" projectType="Web Design">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </MobileDescriptionToggle>

                {/* Desktop: Always visible description */}
                <div className="hidden md:flex flex-col gap-4">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </div>
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
                {/* Mobile: Show/Hide Description */}
                <MobileDescriptionToggle itemId="item-4" projectType="Web Design">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </MobileDescriptionToggle>

                {/* Desktop: Always visible description */}
                <div className="hidden md:flex flex-col gap-4">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </div>
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
                {/* Mobile: Show/Hide Description */}
                <MobileDescriptionToggle itemId="item-5" projectType="Web Design">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </MobileDescriptionToggle>

                {/* Desktop: Always visible description */}
                <div className="hidden md:flex flex-col gap-4">
                  <p>
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </div>
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
