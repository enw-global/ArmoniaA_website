import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: import.meta.env.VITE_SANITY_DATASET as string,
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === "true",
  apiVersion: "2025-05-04", // use current date
});
