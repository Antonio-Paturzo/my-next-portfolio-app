import Header from "@/app/components/Nav/Header";
import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    portfolio: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.portfolio;
  const project = await getProject(slug);

  return (
    <div>
      <Header />
      <h1>{project.name}</h1>
    </div>
  );
}
