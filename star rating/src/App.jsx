import './App.css'
import StarRating from './components/star-rating'

function App() {
  return (
    <div className="min-h-screen bg-[#131619] text-[#FFFFFF]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <StarRating noOfStars={10} />
      </main>
    </div>
  )
}

export default App
