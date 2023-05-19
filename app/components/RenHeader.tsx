import Header from './Header'

export default function RenHeader() {
  return (
    <>
    {/* @ts-expect-error Server Component */}
      <Header />
    </>
  )
}