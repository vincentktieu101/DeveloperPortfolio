import React from "react";
import Syntiant from "./Syntiant";
import CodePath from "./CodePath";
import UCSBUndergraduateLearningAssistant from "./UCSB (ULA)";
import Ugig from "./Ugig";
import UCSBComputerScience from "./UCSB (ComputerScience)";
import PrivateMathTutor from "./PrivateMathTutor";

export default function ExperienceItems() {
  return (
    <div id="experience-items">
      <Syntiant />
      <CodePath />
      <UCSBUndergraduateLearningAssistant />
      <Ugig />
      <UCSBComputerScience />
      <PrivateMathTutor />
    </div>
  );
}
