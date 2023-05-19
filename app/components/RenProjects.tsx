import Projects from "./Projects";

export default function RenHeader() {
  return (
    <>
    {/* @ts-expect-error Server Component */}
      <Projects />
    </>
  )
}