import './App.css'
import GithubProfileFinder from './components/github-profile-finder'

function App() {

  return (
    <div className="min-h-screen bg-[#131619] text-[#FFFFFF]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <GithubProfileFinder />
      </main>
    </div>
  )
}

export default App
