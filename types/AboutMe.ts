import { PortableTextBlock } from "sanity";

export type AboutMe = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  bio: PortableTextBlock[];
  url: string;
  image: string;
  linkedin: string;
  skills: PortableTextBlock[];
  github: string;
  title: string;
}