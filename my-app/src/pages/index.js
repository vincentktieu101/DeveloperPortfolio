import React from "react"
import "../index.css"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Cover from "../sections/Cover"
import About from "../sections/About"
import Contact from "../sections/Contact"
// import Experience from "../sections/Experience"
import Projects from "../sections/Projects"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Cover />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </Layout>
  )
}
