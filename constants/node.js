import { GoHome } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const roles = [
  "designer",
  "developer",
  "tech enthusiast",
  "Future Pirate King 👒",
];

const navLinks = [
  { name: "Home", href : '#home', logo: <GoHome /> },
  { name: "Projects" , href: '#projects', logo: <RiComputerLine/> },
  { name: "About" , href: "#about", logo: <CgProfile/>}
]


const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanushchinthalapudi/",
  },
  {
    name: "GitHub",
    href: "https://github.com/Mr-Dhanush-git", 
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Mrdhanush/",
  },
  {
    name: "Email",
    href: "mailto:dhanushchinthalapudi@gmail.com",
  },
];


export { roles, navLinks, socialLinks };

