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

import Credits from "./Credits";
import { sanityClient } from "@/lib/sanity";
import { splitDescription } from "@/utils/utils";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { useToggleDescLayout } from "@/utils/toggleMobileDesc";

interface ArchiveProps {
  title: string;
  description: string;
  peopleInvolved: string[];
  archiveDate: number;
  projectType: string;
  assetFiles: { url: string }[];
}

const Archive = () => {
  const [error, setError] = useState<string | null>(null);
  const [archivedProjects, setArchivedProjects] = useState<ArchiveProps[]>([]);
  const { activeItem: showMobileDescription, toggle: toggleMobileDescription } =
    useToggleDescLayout();

  useEffect(() => {
    setError(null);

    sanityClient
      .fetch<ArchiveProps[]>(
        `*[_type == "archiveAssets"]{
        title,
        description,
        peopleInvolved,
        archiveDate,
        projectType,
        "assetFiles": assetFiles[]{
          "url": asset->url
        }
      }`
      )
      .then((data) => {
        if (!data || data.length === 0) {
          setArchivedProjects([])
        } else {
          setArchivedProjects(data);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load archive assets. Please try again later.");
      });
  }, []);

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

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {!error && archivedProjects.length === 0 && (
          <div className="text-center text-armonia-sand mb-4">
            No archived projects available at the moment.
          </div>
        )}

        <section>
          <Accordion
            type="single"
            collapsible
            className="w-full text-armonia-sand"
            defaultValue={archivedProjects.length > 0 ? `item-0` : undefined}
          >
            {archivedProjects.map((project, index) => {
              const itemId = `item-${index}`;
              const projectYear = project.archiveDate;
              const { column1, column2 } = splitDescription(
                project.description
              );

              return (
                <AccordionItem key={itemId} value={itemId}>
                  <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                    {/* Mobile Layout */}
                    <div className="flex md:hidden justify-between w-full text-left">
                      <div className="hover:underline">
                        <span>{project.title}</span>
                      </div>
                      <div className="hover:underline">
                        <span>{projectYear}</span>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full text-left text-[18px]">
                      <div className="flex-1/2 hover:underline">
                        <span>{project.title}</span>
                      </div>
                      <div className="flex flex-1/2 lg:flex-1/6">
                        <div className="flex-1 hover:underline">
                          <span>{projectYear}</span>
                        </div>
                        <div className="flex-1/12 hover:underline">
                          <span>{project.projectType}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {/* Render Assets */}
                    <div className="relative w-full">
                      {project.assetFiles.length === 1 ? (
                        // Single image
                        <img
                          src={project.assetFiles[0].url}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // Multiple images - Carousel
                        <Carousel className="w-full">
                          <CarouselContent className="flex items-start">
                            {project.assetFiles.map((asset, assetIndex) => (
                              <CarouselItem
                                key={assetIndex}
                                className="flex-none mr-4"
                              >
                                <Card className="w-auto p-0 border-0">
                                  <CardContent className="p-0">
                                    <img
                                      src={asset.url}
                                      alt={`${project.title} - Asset ${assetIndex + 1}`}
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
                          {project.assetFiles.length > 1 && (
                            <>
                              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                            </>
                          )}
                        </Carousel>
                      )}
                    </div>

                    {/* Mobile: Show/Hide Description */}
                    <MobileDescriptionToggle
                      itemId={itemId}
                      projectType={project.projectType}
                    >
                      {column2 ? (
                        <div className="grid grid-cols-1 gap-4">
                          <p>{column1}</p>
                          <p>{column2}</p>
                        </div>
                      ) : (
                        <p>{column1}</p>
                      )}
                      {project.peopleInvolved &&
                        project.peopleInvolved.length > 0 && (
                          <div
                            id="credits-section"
                            className="flex flex-col gap-2"
                          >
                            
                          </div>
                        )}
                    </MobileDescriptionToggle>
                    <div className="block md:hidden">
                      <Credits peopleInvolved={project.peopleInvolved} />
                    </div>
                    

                    {/* Desktop: Always visible description */}
                    <div className="hidden md:flex flex-col gap-4">
                      {column2 ? (
                        <div className="grid grid-cols-2 gap-7">
                          <p>{column1}</p>
                          <p>{column2}</p>
                        </div>
                      ) : (
                        <p>{column1}</p>
                      )}
                      {project.peopleInvolved &&
                        project.peopleInvolved.length > 0 && (
                          <div
                            id="credits-section"
                            className="flex flex-row gap-2"
                          >
                            <Credits peopleInvolved={project.peopleInvolved} />
                          </div>
                        )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
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
