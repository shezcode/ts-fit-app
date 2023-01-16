import { useState } from "react"
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectPage } from "@/utils/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectPage;
  setSelectedPage: (value: SelectPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

  const flexBetween = "flex justify-between items-center"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            {isAboveMdScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div> ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="w-6 h-6 text-white"/>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar