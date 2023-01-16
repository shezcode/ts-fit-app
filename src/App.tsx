import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectPage } from "@/utils/types"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectPage>(SelectPage.Home)

  return (
    <div className="app bg-gray-20 p-2">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
