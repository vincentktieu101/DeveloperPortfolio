import syntiant2 from "./syntiant2";
import codePath from "./codePath";
import ucsbUndergraduateLearningAssistant2 from "./ucsbUndergraduateAssistant2";
import syntiant from "./syntiant";
import ucsbUndergraduateLearningAssistant from "./ucsbUndergraduateAssistant";
import ugig from "./ugig";
import ucsbComputerScience from "./ucsbComputerScience";
import privateMathTutor from "./privateMathTutor";

interface experience {
  type: string;
  title: string;
  company: string;
  location: string;
  time: string;
  text: string;
}

const experiences: experience[] = [
  syntiant2,
  ucsbUndergraduateLearningAssistant2,
  syntiant,
  codePath,
  ucsbUndergraduateLearningAssistant,
  ugig,
  ucsbComputerScience,
  privateMathTutor,
];

export default experiences;
