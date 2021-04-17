import React, { useEffect } from "react"
import "../index.css"
import { SnackbarProvider } from "notistack"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Cover from "../sections/Cover"
import About from "../sections/About"
import Contact from "../sections/Contact"
// import Experience from "../sections/Experience"
import Projects from "../sections/Projects"

export default function IndexPage() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in')
    const appearOptions = {
      threshold: 0.4
    }
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, appearOptions)
    faders.forEach(faders => {
      appearOnScroll.observe(faders);
    })
  }, [])

  return (
    <SnackbarProvider maxSnack={3}>
      <Layout>
        <SEO title="Home" />
        <Cover />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </Layout>
    </SnackbarProvider>
  )
}
