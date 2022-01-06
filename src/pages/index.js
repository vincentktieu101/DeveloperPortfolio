import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";
import "../styles/index.css";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Cover from "@sections/Cover";
import About from "@sections/About";
import Skills from "@sections/Skills";
import Contact from "@sections/Contact";
import Experience from "@sections/Experience";
import Projects from "@sections/Projects/FeaturedProjectItems";
import initFaders from "@utils/init-faders";
// import initEmojiShake from "@utils/init-emoji-shake";
import initProjectsCollapse from "@utils/init-projects-collapse";
import initProject from "@utils/init-project";

export default function IndexPage() {
  useEffect(() => {
    initFaders();
    // initEmojiShake();
    initProject();
    initProjectsCollapse();
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <Layout>
        <SEO title="Home" />
        <Cover />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </SnackbarProvider>
  );
}
