import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";


function App() {

  return (
    <div className="min-h-screen bg-[#131619] text-[#FFFFFF]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex-1 py-8 sm:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
