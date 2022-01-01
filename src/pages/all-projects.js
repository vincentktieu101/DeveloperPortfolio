import React, { useEffect } from "react";
import Projects from "@sections/Projects/AllProjectItems";
import Layout from "@components/Layout";
import initFaders from "@utils/init-faders";
// import initEmojiShake from "@utils/init-emoji-shake";
import initProjectsCollapse from "@utils/init-projects-collapse";
import initProject from "@utils/init-project";

export default function ProjectsPage() {
  useEffect(() => {
    initFaders();
    // initEmojiShake();
    initProject();
    initProjectsCollapse();
  }, []);

  return (
    <Layout>
      <div style={{ height: "5vh" }} />
      <Projects />
      <div style={{ height: "10vh" }} />
    </Layout>
  );
}
