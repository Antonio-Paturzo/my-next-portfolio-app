import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineTroubleshoot } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { GiGiftOfKnowledge } from "react-icons/gi";

const features = [
  {
    name: "Strong understanding of programming languages",
    description:
      "In my role as a full-stack developer, I have a comprehensive understanding of programming languages that are essential for both front-end and back-end development. I am proficient in languages such as core JavaScript, various React Frameworks, Node.Js, or Typescrypt, and more, enabling me to create dynamic and interactive web applications across the entire stack.",
    icon: BiCodeAlt,
  },
  {
    name: "Excelling in problem-solving, debugging, and troubleshooting",
    description:
      "Problem-solving is one of my key strengths as a full-stack developer. I have the ability to analyze challenges that arise during development, identify the root cause, and implement effective solutions. I am skilled in debugging, troubleshooting, and finding optimal approaches to achieve desired functionality. (And of course, I am a Master Googler!)",
    icon: MdOutlineTroubleshoot,
  },
  {
    name: "Well versed in essential web development concepts",
    description:
      "With my knowledge in web development concepts, I am well-equipped to handle various aspects of the job. I understand client-server architecture, HTTP protocols, RESTful APIs, database management, version control systems like Git, and various CMS structures. This knowledge allows me to build scalable, efficient, and maintainable web solutions.",
    icon: SiWebpack,
  },
  {
    name: "Committed to continuous learning and adaptability",
    description:
      "Being a developer requires me to be continuously learning and adapting to new technologies and trends. I have a strong commitment to staying up-to-date and expanding my knowledge base. By keeping pace with industry advancements, I ensure that I deliver high-quality web solutions and foster my professional growth.",
    icon: GiGiftOfKnowledge,
  },
];

const Features = () => {
  return (
    <div className="bg-primary-dark py-12 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            <span className="inline-flex text-base items-center rounded-md bg-violet-300 px-2 py-1 font-semibold text-indigo-600 ring-1 ring-inset ring-purple-700/10">
              Deploy Faster
            </span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">
            4 Compelling Reasons to Choose Me as Your Perfect Fit
          </p>
          <p className="mt-6 text-lg leading-8 text-violet-400">
            Attention visionary companies in need of a web development maestro!
            Let&apos;s collaborate to unlock the full potential of your digital
            presence and propel your business to new heights!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-amber-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
