import React, { useState, useEffect } from "react"
import { GlobalStyles } from "twin.macro"
import NavBar from "./molecule/NavBar"
import { motion } from "framer-motion"
import Seo from "./seo"

const Layout = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  useEffect(() => setHasLoaded(true), [])
  const variants = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
  }
  return (
    <>
      <GlobalStyles />
      <Seo />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={"hidden"}
          animate={hasLoaded ? "visible" : "hidden"}
          variants={variants}
          style={{
            width: "100%",
            maxWidth: "1280px",
          }}
        >
          <NavBar />
          <main>{children}</main>
          <footer></footer>
        </motion.div>
      </div>
    </>
  )
}

export default Layout
