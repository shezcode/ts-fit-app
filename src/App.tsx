import Navbar from "@/scenes/navbar"
import { useState } from "react"

function App() {
  const [selectedPage, setSelectedPage] = useState('home')

  return (
    <div className="app bg-gray-20 p-2">
      <Navbar selectedPage={selectedPage}/>
    </div>
  )
}

export default App
