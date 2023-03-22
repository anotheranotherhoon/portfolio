import React from "react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutChildren {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutChildren) => {
  return (
    <div className="bg-primary">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout