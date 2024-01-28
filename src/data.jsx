import NexodusImg from "./assets/Nexodus-hero-bg.png";
import NoteNestImg from "./assets/NoteNest-hero-bg.png";
import FitzenImg from "./assets/Fitzen-hero-bg.png";

import { FaReact, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiAuth0 } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

export const projects = [
  {
    id: 1,
    img: NexodusImg,
    title: "Nexodus",
    desc: "Nexodus is an ecommerce website I developed, focusing on the furniture market and  designed it to be super user-friendly with a clean and easy-to-navigate layout.",
  },

  {
    id: 2,
    img: NoteNestImg,
    title: "NoteNest - Your Digital Notebook",
    desc: "NoteNest is a handy notes app that helps you organize your thoughts effortlessly. Create custom notebooks, add, edit, and organize your notes with ease. Your ideas, your way, with NoteNest.",
  },
  {
    id: 3,
    img: FitzenImg,
    title: "Fitzen",
    desc: "Fitzen is a website dedicated to exercise and fitness. It's a place to learn about various exercises and workouts. The unique feature of Fitzen is that it provides step-by-step procedures for each exercise, making it easy for users.",
  },
];

export const singleProject = [
  {
    id: 1,
    img: NexodusImg,
    githubLink: "https://github.com/abishek-hari/Nexodus",
    websiteLink: "https://nexodus.netlify.app/",
    icons: [
      <FaReact className='web__icons' />,
      <SiStyledcomponents className='web__icons' />,
      <SiAuth0 className='web__icons' />,
    ],
    techstack: ["React", "Styled Component", "Auth0"],
    title: "Nexodus",
    description:
      "Nexodus is an ecommerce website I developed, focusing on the furniture market.It's like an online furniture store where you can shop for sofas, beds, and other home furnishings.I designed it to be super user-friendly with a clean and easy-to-navigate layout.",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "The primary goal of Nexodus was to design and build a responsive e-commerce website that provides a seamless shopping experience.I aimed to create an intuitive platform where users could explore a wide variety of furniture options. The project's purpose was to develop a real-world application that applies front-end technologies to solve user-centric challenges.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "For the tech side of things, I used some modern tools to make Nexodus work smoothly:\nReact: For dynamic UIs with component-based architecture.\nStyled Components: Responsive, visually appealing styling for all screen sizes.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "While working on Nexodus, I learned a lot about  development and design. It improved my skills in building user-friendly websites. I became proficient in React which is important for creating interactive web applications.Implementing Auth0 for secure authentication elevated my understanding of safeguarding user data. And by using Styled Components, I got better at making websites look visually appealing and consistent.",
  },
  {
    id: 2,
    img: NoteNestImg,
    githubLink: "https://github.com/abishek-hari/NoteNest",
    websiteLink: "https://notenestv1.netlify.app/",
    icons: [
      <AiOutlineHtml5 className='web__icons' />,
      <FaCss3 className='web__icons' />,
      <SiJavascript className='web__icons' />,
    ],
    techstack: ["HTML", "CSS", "JAVASCRIPT"],
    title: "NoteNest - Your Digital Notebook",
    description:
      "NoteNest is a simple notes app that makes note-taking a breeze. It lets you create custom notebooks and easily manage your notes for a clutter-free digital experience.",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "I built NoteNest to be a user-friendly digital companion for capturing ideas anytime, anywhere. Whether it's a quick reminder or detailed project notes, NoteNest is there to boost your productivity and keep you organized.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "Developed using HTML, CSS, and JavaScript, NoteNest keeps things simple and easy to use. It also uses local storage, ensuring your notes are secure and accessible even without an internet connection. NoteNest is a straightforward app, letting you Create, Read, Update, and Delete notes effortlessly.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "Building NoteNest taught me the importance of user-friendly design. Integrating local storage improved my understanding of data persistence, ensuring a seamless experience for users. Using plain JavaScript and CSS for this project laid a solid foundation in frontend development.",
  },
  {
    id: 3,
    img: FitzenImg,
    githubLink: "https://github.com/abishek-hari/Fitzen",
    websiteLink: "https://fitzens.netlify.app/",
    icons: [
      <FaReact className='web__icons' />,
      <FaCss3 className='web__icons' />,
    ],
    techstack: ["React", "CSS"],
    title: "Fitzen",
    description:
      "Fitzen is a website dedicated to exercise and fitness. It's a place to learn about various exercises and workouts. The unique feature of Fitzen is that it provides step-by-step procedures for each exercise, making it easy for users to follow along and get the most out of their workouts.",
    project__goal_title: "Project Purpose And Goal",
    project__goal_desc:
      "The primary aim of Fitzen is to make fitness accessible to everyone. I wanted to create a platform where people, regardless of their fitness level, could find detailed instructions for exercises, making it simple to get started or advance in their fitness journey. The goal is to empower users with the knowledge they need to maintain a healthy lifestyle.",
    project__webstack__title: "Web Stack and Explanation",
    project__webstack__desc:
      "For the tech side of things, I employed the following technologies to ensure a user-friendly and informative experience:\nReact: For dynamic UIs with component-based architecture.\nCSS: I used modern CSS techniques for styling, ensuring a responsive and visually appealing design.",
    project__lesson_title: "Lessons Learned:",
    project__lesson_desc:
      "During the development of Fitzen, I gained valuable insights into user experience and the importance of providing clear and concise information.I also learned to work with React effectively, improving my skills in creating informative and interactive web applications, which will be valuable for future projects.",
  },
];
