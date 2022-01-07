import frontendDevelopment from "./frontendDevelopment";
import userInteface from "./userInteface";
import backendDevelopment from "./backendDevelopment";
import productDevelopment from "./productDevelopment";

interface skill {
  title: string;
  background: number;
  icon: string;
  text: string;
}

const skills: skill[] = [
  frontendDevelopment,
  userInteface,
  backendDevelopment,
  productDevelopment,
];

export default skills;
