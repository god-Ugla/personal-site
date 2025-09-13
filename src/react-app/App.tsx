// src/App.tsx

import "./App.css";
import { FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa';
import Navbar from './Navbar.tsx';
import TabBox from './TabBox.tsx';
import TabCarousel from "./TabCarousel.tsx";

function App() {
  const navbarLinks: { [key: string]: string } = {
    Home: "#home",
    About: "#about",
    Projects: "#projects",
    Contact: "#contact"
  };

  const tabBoxInfo: { [key: string]: {title: string, description: string}[] } = {
    "Who am I?": [
      {
        title: "Wait a minute... Who are you?", 
        description: "I am currently a junior at Carthage College in Kenosha, WI, majoring in both mathematics and computer science.\n\n" +
                    "I have always been interested in how so much of the world can be represented through mathematics, such as describing the motion of a ball that was thrown through the air or predicting the growth of a species in a set ecosystem. " +
                    "Computer science is extremely useful in solving these problems, since something that would take forever to do by hand can be done in seconds using a cleverly thought-out algorithm.\n\n" +
                    "I am excited about furthering my skills in computer science to solve more of these problems and come up with increasingly innovative solutions."
      }
    ],
    "Experience": [
      {
        title: "Education:",
        description: "Carthage College | Expected Graduation Winter 2026\n B.A. Mathematics, B.A. Computer Science | 4.0 GPA\n\n" +
                     "Relevant Coursework: Web Development, Database Design & Development, Data Structures & Algorithms, Abstract Algebra, Real Analysis"
      },
      {
        title: "Work Experience:",
        description: "02/25 - Present | AI Prompt Engineer and Evaluator @ DataAnnotation\n\n" + 
                     "05/24 - 08/24 | Undergraduate Researcher @ Carthage College\n\n" + 
                     "06/21 - 08/23 | Sales Associate @ Whitmore Ace Hardware"
      }
    ],
    "Skills & Technologies": [
      {
        title: "Programming Languages", 
        description: "Strong: C++, Python, JavaScript, HTML, SQL\n" + 
                     "Intermediate: C, Java, CSS, TypeScript, R"
      },
      {
        title: "Frameworks, Libraries, and Development Tools", 
        description: "Dev Tools: VS Code, CLion, Github, Git, Postman \n" + 
                     "Web Dev: React, Express.js, Flask, Bootstrap, Handlebars\n" +
                     "Data Tools: numpy, scipy, matplotlib, pandas, SQLite, Databases"
      },
      {
        title: "Other Software / Productivity", 
        description: "Microsoft Office Suite, Google Workspace, LaTeX"
      }
    ],
    "Awards": [
      {
        title: "Awards:", 
        description: "Carthage College Summer Undergraduate Research Experience Award - 2024\n\n" +
                     "Carthage College Math/Science Scholarship Winner - 2023\n\n" + 
                     "National Merit Finalist, Perfect SAT Math Score - 2023\n\n" + 
                     "Carthage College Dean's List - 2023-Present\n\n" + 
                     "Samsung Solve For Tomorrow Illinois State Winner - 2023 "
      }
    ]
  };

  const carouselInfo: {tabName: string, title: string, description: string, carouselImg: string, descImg: string, linkMore: string}[] = [
    {
      tabName: "Catenary Solver Package",
      title: "Catenary Solver Python Package",
      description: "This program was created as a part of my Summer Undergraduate Reasearch Experience at Carthage College. I published it to the Python Package Index under the name catenary-solver.\n\n" + 
                   "The goal of the project was to answer the question \"Is it possible to find the mass density of a hanging cable given its shape?\", which is the inverse of the normal \"forward\" problem that asks if it is possible to find the shape of a hanging cable given its mass density. " + 
                   "The program contains modules that compute the answers to both the forward problem and the inverse problem.\n\n" + 
                   "I had not used Python before this project, so I am proud of what I was able to learn and accomplish as a part of it. The program utilizes scipy, numpy, matplotlib, and involves both numerical methods and a unique brute-force algorithm I designed.",
      carouselImg: "/project_photos/pypi_catenary.png",
      descImg: "/project_photos/catenary_poster.jpg",
      linkMore: "https://github.com/alankwak/catenary-solver"
    },
    {
      tabName: "Elliptic Curve Cryptology",
      title: "Elliptic Curve Based Encoder/Decoder",
      description: "In my abstract algebra course, we did some work with elliptic curves and the groups they create under modular arithmetic (typically mod 13). I made a Python program that uses these groups to encode and decode messages.\n\n" + 
                   "The program asks for 2 integers to create a key, and then allows you to input a message to either encode or decode using that key. You can also print the key or relevant information about the elliptic curve group. \n\n" + 
                   "In this project, I strengthened my Python skills by taking an Object-Oriented approach to programming in Python, and I had fun applying computer science to tackle a problem in abstract algebra.\n\n" + 
                   "If you're interested, see if you can decode this message using an Express.js website I made (linked below). Hint: there are some nice-looking numbers in this description.\n" + 
                   "KEZVDFVFJIUYOBUVZYFYOFEIIOZYVGEMAYEIFVUHHODVCJJVCDFMOELLKDLPVVIJVIORDCZDOSMRFERNLWARGS",
      carouselImg: "/project_photos/ec_curve.png",
      descImg: "",
      linkMore: "https://ec-crypt.alankwak.dev"
    },
    {
      tabName: "Messenging Web App",
      title: "Messenging/Email Web App",
      description: "A web-based messaging app that allows users to register an account and send messages to other users.\n\n" + 
                   "Messages contain a sender, one or more recipients, a subject, the actual message content, and a localized sent-on date. " + 
                   "A user can also easily reply to messages they have received via a button that autofills the compose fields.\n\n" +
                   "I created this app twice -- once with built-in HTML web components and again with React components. The app also makes use of an Express.js backend and a SQLite database to handle storing and retrieving messages and users.",
      carouselImg: "/project_photos/messenger_home.png",
      descImg: "",
      linkMore: ""
    },
    {
      tabName: "Tournament Tracker App",
      title: "Role-Based Multi-Tournament Tracker App",
      description: "A web-based sports tournament tracker app. It can hold data about multiple tournaments, which each contain their own teams, locations, and games.\n\n" + 
                   "Non-admin users can only see tournament information and search for games in a tournament, while admin users can add and delete information to the tracker (see image).\n\n" + 
                   "This project incorporates Bootstrap styling, Handlebars views, an Express.js route handler/backend, custom authentication middleware, and a SQLite database to hold all of the information.",
      carouselImg: "/project_photos/tournament_admin.png",
      descImg: "/project_photos/tournament_comparison.png",
      linkMore: ""
    },
    {
      tabName: "TicTacToe / Connect4",
      title: "2-Player Grid Games: TicTacToe/Connect4",
      description: "A C++ program with a parent \"GridGames\" class from which many grid-based games can be created. I've implemented Tic Tac Toe and Connect 4 classes/games by extending the GridGames class.\n\n" + 
                   "After my first year of computer science courses at college, I made this project to practice OOP principles like inheritance and polymorphism. " + 
                   "While I would like to turn this program into a web-based game eventually, I think I may be better off rewriting the program logic in JavaScript first.",
      carouselImg: "/project_photos/tictactoe.png",
      descImg: "",
      linkMore: "https://github.com/alankwak/GridGames/tree/master"
    },
    {
      tabName: "DSA Programs",
      title: "Data Structures and Algorithms Coursework",
      description: "C++ programs made as a part of my DSA class. Included is a program that solves a NYT Connections-style game and one that finds the shortest path from \"start\" and \"end\" nodes.\n\n" + 
                   "As a part of this class (and these projects), I've learned how vectors, linked-lists, stacks, queues, BSTs, tries, and hash tables work. I've also learned about common sorting algorithms and recursion.",
      carouselImg: "/project_photos/dsa.png",
      descImg: "",
      linkMore: "https://github.com/alankwak/data-structures-projects/tree/main"
    },
    {
      tabName: "This Website!",
      title: "My Personal Website",
      description: "If you're here, you've already seen this one! Everything on here is made \"from scratch\" by me. Overall, I think the custom components I've built here reflect my ability to create both a functional AND good-looking webpage.\n\n" + 
                   "This project is probably the most in-depth I've gone design-wise on a website. I've created several custom React components as a part of this website, which I like because I've made sure they are also easily reusable for future sites I make. " + 
                   "I also learned how to host a website online (this one is hosted through Cloudflare) and a little bit about configuring DNS when setting up an email on this domain.",
      carouselImg: "/project_photos/personalwebsite.png",
      descImg: "",
      linkMore: ""
    },
    {
      tabName: "SkillsUSA: Pedestrian Safety",
      title: "Pedestrian Safety Alert Device",
      description: "As part of a year-long engineering course, I was part of a 3-person team that researched, prototyped, and presented a pedestrian safety alert system, consisting of an indicator device and a sensor to detect vehicles around blind corners in large cities. " + 
                   "We won second place at the 2023 Illinois SkillsUSA Engineering Design competition.\n\n" + 
                   "In addition to completing all steps in the engineering design process, my primary role was designing and creating the final physical prototype, mostly through Autodesk Inventor. " + 
                   "The image shows an exploded view of the prototype, which my team and I decided to place in the sidewalk itself so pedestrians looking down at their phones would notice it more easily.\n\n" + 
                   "Despite this project having been done during my senior year of high school, I still like to show it off because I'm proud of it and it exemplifies my problem-solving, communication, and design skills.",
      carouselImg: "/project_photos/skillsusa.png",
      descImg: "/project_photos/skillsusa_exploded.png",
      linkMore: "https://drive.google.com/drive/folders/1N-w3AUgfssjpnNMTZKOB5JyFQbhg4jZs"
    }
  ];

  function toggleTheme() {
    if(document.body.classList.contains("dark-mode")) {
      document.body.classList.replace("dark-mode", "light-mode");
    } else {
      document.body.classList.replace("light-mode", "dark-mode");
    }
  };

  return (
    <>
    <Navbar logoRef="/logo.png" brand="Alan" buttonNames={navbarLinks} />

    <div id="home"> 
      <button className="theme-button" onClick={(e) => {toggleTheme(); e.currentTarget.blur()}}>☼ | ☾</button> 
      <div style={{"clear": "both"}}></div>
    </div>
    
    <div className="title-container">
      <h1 >Hello, I'm <br />Alan Kwak!</h1>
      <img src="/headshot.jpg" />
    </div>
    
    <br />

    <div id="about">
      <TabBox sectionTitle="About Me" tabs={tabBoxInfo} />
    </div>

    <br />

    <div id="projects">
      <TabCarousel sectionTitle="Projects" tabs={carouselInfo} />
    </div>

    <br />

    <div className="contact" id="contact">
      <header>Contact Me</header>
      <div>
        <ul>
          <li>Email: <br /> <a href="mailto:alan@alankwak.dev" target="_blank" rel="noopener noreferrer">alan@alankwak.dev</a> </li>
          <li>Phone: <br /> +1 (630)-981-4740</li>
        </ul>
        <div className="webpage-icons">
          <a href="https://github.com/alankwak" target="_blank" rel="noopener noreferrer" >
            <FaGithub size={30} /> Github
          </a>
          <a href="https://linkedin.com/in/alan-kwak" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30}/> LinkedIn
          </a>
          <a href="https://carthage.joinhandshake.com/profiles/nbkars" target="_blank" rel="noopener noreferrer">
            <FaHandshake size={30}/> Handshake
          </a>
        </div>
      </div>
    </div>
    
    <footer> Copyright © 2025 | <a>Alan Kwak</a> </footer>
    </>
  );
}

export default App;
