import React, { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw from "twin.macro"
import Hero from "../components/molecule/Hero"
import { useStateContext } from "../context/StateContext"
import HeroImage from "../images/hero/hero_Background.png"

const IndexPage = () => {
  const { setShowCart } = useStateContext()
  useEffect(() => setShowCart(false), [])

  return (
    <>
      <div tw="relative mb-10 ">
        {/* twin does not work on Gatsby Components */}
        <img src={HeroImage} alt="main index image" />
        <Hero />
      </div>
    </>
  )
}

export default IndexPage
