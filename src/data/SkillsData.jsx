import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { DiW3C, DiJqueryLogo, DiJavascript } from "react-icons/di";
import { IoAccessibility } from "react-icons/io5";
import { SiAdobexd, SiAdobephotoshop } from "react-icons/si";

export const skillGroups = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "웹표준", icon: <DiW3C /> },
    { name: "웹 접근성", icon: <IoAccessibility /> },
    { name: "jQuery", icon: <DiJqueryLogo /> },
    { name: "JavaScript (ES6+)", icon: <DiJavascript /> },
    { name: "React (Vite)", icon: <FaReact /> },
  ],
  Collaboration: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ],
  Design: [
    { name: "Figma", icon: <FaFigma /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
  ],
};
