import { getAboutMe } from "@/sanity/sanity-utils";

export default async function subHeader() {
  const about = await getAboutMe();
  return (
    <div>
      <div className="text-base font-medium leading-none text-white">{about.name}</div>
      <div className="text-sm font-medium leading-none text-gray-400">{about.title}</div>
    </div>
  )
}

