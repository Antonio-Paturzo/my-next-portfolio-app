import { PortableTextBlock } from "sanity";

export type Project = {
      _id: string;
      _createdAt: Date;
      _updatedAt: Date;
      name: string;
      projectDescription: PortableTextBlock[];
      url: string;
      slug: string; 
      image: string;
}