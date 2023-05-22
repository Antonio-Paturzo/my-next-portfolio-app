import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects }: { projects: any[] }) {
  return (
    <div className="bg-primary-dark">
      <h2 className="font-extrabold text-5xl tracking-tight text-quaternary-light center text-center">
        Projects
      </h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/portfolio/${project.slug}`}
              className="group hover:scale-110 transition"
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg shadow-md shadow-neutral-800 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={500}
                  width={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-quaternary-light">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="center text-center">
        <a
          href="/portfolio"
          className="mx-auto inline-block center rounded-md border border-transparent bg-ternary-dark px-8 py-3 text-center shadow-md shadow-slate-900 font-bold text-slate-700 hover:bg-primary-light"
        >
          <strong className="text-center center">View More Projects</strong>
        </a>
      </div>
    </div>
  );
}
