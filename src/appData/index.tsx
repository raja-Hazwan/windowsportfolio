import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import notepadIcon from "../../assets/notepad.png";
import butterfly from "../../assets/butterfly.png";
import col1 from "../../assets/gallery/0.webp";
import col2 from "../../assets/gallery/1.webp";
import col3 from "../../assets/gallery/2.webp";
import col4 from "../../assets/gallery/3.webp";
import col5 from "../../assets/gallery/4.webp";
import col6 from "../../assets/gallery/5.webp";

export const TechIcon = {
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  PHP: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  SOLIDITY:
    "https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  LARAVEL:
    "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  WEB3JS:
    "https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white",
  FASTAPI:
    "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
  HARDHAT:
    "https://img.shields.io/badge/Hardhat-F7DF1E?style=for-the-badge&logo=hardhat&logoColor=black",
  CSHARP:
    "https://img.shields.io/badge/C%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
  DOTNET:
    "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "Notepad",
      message: "",
      Icon: notepadIcon,
      isMinimized: false,
      zIndex: 0,
      program: App.NOTEPAD,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [WorkType.HACKATHON, WorkType.PERSONAL];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Personalised Portfolio Website",
    date: "2025",
    gitURL: "https://github.com/raja-Hazwan/windowsportfolio",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.REACT,
      TechIcon.JAVASCRIPT,
      TechIcon.CSS,
      TechIcon.HTML,
    ],
    gallery: [],
    overview: `This portfolio website is built to resemble the classic Windows XP desktop environment —
    a tribute to the very first computer I ever used, my dad's PC. It was on that machine that my
    curiosity for technology first sparked, clicking through every corner of the desktop just to
    see what everything did. Building this site felt like the most personal way to present my
    work: making it feel like you're sitting at my computer, exploring it yourself.
    It is built with Next.js and React, styled entirely with CSS to recreate the authentic XP look and feel.`,
  },
  {
    id: 2,
    title: "Blockchain-Based Voting Web App (Web3.0)",
    date: "Jan 2024",
    gitURL: "",
    techstack: [
      TechIcon.SOLIDITY,
      TechIcon.WEB3JS,
      TechIcon.JAVASCRIPT,
      TechIcon.HTML,
      TechIcon.CSS,
    ],
    gallery: [],
    overview: `A decentralized voting system built on the Ethereum blockchain to ensure secure,
    transparent, and tamper-proof elections. Ethereum smart contracts written in Solidity handle
    vote recording and validation with immutable on-chain storage, while Web3.js connects the
    front-end interface to the blockchain network. The app supports voter registration, candidate
    selection, and real-time vote counting, with cryptographic measures in place to maintain
    voter anonymity while preserving vote integrity.`,
  },
  {
    id: 3,
    title: "Comicraft — Comic-Strip Personalised Web App",
    date: "Oct 2024",
    gitURL: "",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.REACT,
      TechIcon.JAVASCRIPT,
      TechIcon.CSS,
    ],
    gallery: [],
    overview: `Comicraft is a Next.js web application that lets users generate personalised comic strips
    with dynamic text and images. It features interactive drag-and-drop panel arrangement, automatic
    comic-style image filters and effects, and a responsive design that works across both desktop
    and mobile. Users can create an account, save their comic strips to a personal gallery, and
    share their creations with others.`,
  },
  {
    id: 5,
    title: "AI Fiqh Hackathon — Agent Deen & BarakahVault",
    date: "Feb 2026",
    gitURL: "",
    techstack: [
      TechIcon.FASTAPI,
      TechIcon.NEXTJS,
      TechIcon.MONGODB,
      TechIcon.SUPABASE,
      TechIcon.SOLIDITY,
      TechIcon.HARDHAT,
      TechIcon.WEB3JS,
    ],
    gallery: [],
    overview: `Bank Rakyat Malaysia x AI Fiqh Hackathon — Team BismillahMergePR placed 5th out of 21 teams.
    Over three intensive days, the team built two interconnected solutions centred on Islamic finance and AI.
    Agent Deen is an AI chatbot built around a complete retrieval-augmented generation (RAG) pipeline with
    language detection, document retrieval, reranking, and citation mechanisms to ensure Shariah compliance
    and prevent hallucinations. BarakahVault is an ethical Islamic investment platform that evaluates
    companies through Maqasid Shariah scoring across five Islamic value dimensions, includes a zakat
    calculator supporting cryptocurrency, and uses Solidity smart contracts for crowdfunding transparency.
    The key insight from the event: in Islamic finance, accuracy alone isn't enough — trust and verifiable
    sources matter deeply.`,
  },
  {
    id: 4,
    title: "Football News Page",
    date: "Feb 2022",
    gitURL: "",
    techstack: [TechIcon.JAVASCRIPT, TechIcon.HTML, TechIcon.CSS],
    gallery: [],
    overview: `A web application that fetches real-time football news, live scores, and match highlights
    through RESTful API integration. The app pulls live sports data from multiple reliable sources,
    with a responsive UI that updates content dynamically and tracks scores in real time. Users can
    search and filter by specific teams, leagues, or matches. Performance was optimised using
    efficient data caching and lazy loading techniques.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 5,
    type: WorkType.HACKATHON,
    icon: file,
    title: "AI Fiqh Hackathon — 5th / 21 Teams",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Blockchain Voting App (Web3.0)",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Comicraft — Comic-Strip Web App",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Football News Page",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col1,
  },
  {
    id: 1,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col2,
  },
  {
    id: 2,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col3,
  },
  {
    id: 3,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col4,
  },
  {
    id: 4,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col5,
  },
  {
    id: 5,
    title: "",
    location: "",
    desc: "",
    date: "",
    img: col6,
  },
] as GalleryImage[];
