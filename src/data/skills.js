import { FaReact, FaAndroid, FaJava, FaUnity, FaWordpress } from 'react-icons/fa';
import { SiFlutter, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';

const skills = [
  { name: "ReactJS", icon: <FaReact /> },
  { name: "React Native", icon: <FaAndroid /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Java JEE", icon: <FaJava /> },
  { name: ".NET / C#", icon: <DiDotnet /> },
  { name: "C++ / C / VB", icon: <FaUnity /> },
  { name: "Unity / Game Dev", icon: <FaUnity /> },
  { name: "Figma / UI Design", icon: <FaReact /> }, // Using React icon just for example, but you could use Figma or design icons
  { name: "WordPress", icon: <FaWordpress /> }
];

export default skills;
