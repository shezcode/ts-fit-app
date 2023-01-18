import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectPage } from "@/utils/types"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectPage>(SelectPage.Home)
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true)
        setSelectedPage(SelectPage.Home)
      } else {
        setIsTopPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    {/* clean up function*/}
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <div className="app bg-gray-20 p-2">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
