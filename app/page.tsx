import Header from './components/Header'
import MainContent from './components/MainContent'
import MainPageContent from './components/MainPageContent'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div>
      <Header />
      <header className="bg-primary-dark shadow">
          <MainContent />
        </header>
        <main>
          <MainPageContent />
            {/* @ts-expect-error Server Component */}
          <Projects />
        </main>
    </div>
  )
}
