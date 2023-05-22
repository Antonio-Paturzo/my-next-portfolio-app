import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default async function Portfolio() {
  const projects = await getProjects();
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold my-8">Projects</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-lg shadow-slate-800 p-6"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="hover:scale-105 transition"
              >
                <Image
                  src={project.image}
                  width={600}
                  height={400}
                  alt={project.name}
                  className="rounded-lg shadow-lg hover:opacity-75 shadow-slate-800"
                />
              </Link>
              <h2 className="text-xl font-bold text-quaternary-light mt-4">
                {project.name}
              </h2>
              <p className="text-gray-600">{project.name}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener"
                className="text-blue-500 mt-4 inline-block"
              >
                Live Site
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
