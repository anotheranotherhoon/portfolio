import Link from "next/link"
import { useState } from "react"
import DarkModeToggle from "../DarkMode/DarkModeToggle"
import Icon from "./Icon"
const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)
  const handleMenuClick = () => {
    setIsMenuClicked((prev) => !prev)
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container lg:mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center lg:items-center ">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Icon/>
          <span className="ml-3 text-xl font-bold">프론트엔드 개발자 이창훈</span>
        </Link>

        {/* 웹 */}
        <nav className="md:ml-auto md:flex lg:flex flex-wrap items-center text-base justify-center sm: hidden ">
          <Link href="/" className="head-link">
            Home
          </Link>
          <Link href="/profile" className="head-link">
            Profile
          </Link>
          <Link href="/skills" className="head-link">
            Skills
          </Link>
          <Link href="/projects" className="head-link">
            Projects
          </Link>
          <Link href="/contact" className="head-link">
            Contact
          </Link>
          <DarkModeToggle />
        </nav>

        {/* 모바일 */}
        <div className="lg:hidden sm:visible text-right" onClick={handleMenuClick}>
          {isMenuClicked ? 
          "✕"
          :
          "☰"
          }
          </div>
        {isMenuClicked&& 
        <nav className="lg:hidden  flex  text-base flex-col sm:flex">
          <Link href="/" className="head-link text-right">
            Home
          </Link>
          <Link href="/profile" className="head-link text-right">
            Profile
          </Link>
          <Link href="/skills" className="head-link text-right">
            Skills
          </Link>
          <Link href="/projects" className="head-link text-right">
            Projects
          </Link>
          <Link href="/contact" className="head-link text-right">
            Contact
          </Link>
          <div className="text-right">
          <DarkModeToggle />
          </div>
        </nav>}
      </div>
    </header>
  )
}

export default Header