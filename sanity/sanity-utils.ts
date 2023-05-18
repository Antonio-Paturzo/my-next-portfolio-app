import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'fu9kj3sf',
    dataset: 'production',
    apiVersion: '2023-05-01',
  });

  return client.fetch(
    groq`*[_type == "project"] {
      _id,
      _createdAt,
      _updatedAt,
      name,
      "projectDescription": projectDescription[0].children[0].text,
      url,
      "slug": slug.current,
      "image": image.asset->url,
    }`
  )
}