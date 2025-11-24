import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: import.meta.env.VITE_SANITY_DATASET as string,
  useCdn: true,
  apiVersion: "2025-05-04", // use current date
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: string) => builder.image(source);
