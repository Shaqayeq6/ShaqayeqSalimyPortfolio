import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `Looking ahead, I am eager to bring my knowledge to real-world projects, contributing to dynamic teams and working on applications that enhance user experiences and streamline processes. I aim to leverage my skills to build a future where technology makes life easier and more efficient.`;

export const ABOUT_TEXT = `As a Computer Science student, I’ve been deeply immersed in mastering the fundamentals of software development, web technologies, and problem-solving strategies. My academic journey has been both challenging and rewarding, offering me valuable hands-on experience in coding and system design. Through many school projects, I’ve had the chance to put these concepts into practice, which has been instrumental in developing and refining my skills.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2021",
    role: "Credential Examiner",
    company: "World Education Service",
    description: `Verified and processed academic credentials, ensuring accuracy and adherence to policies. Linked document images to appropriate institutions and credentials, both digitally and manually Ensured accurate evaluations by following WES policies and adapting to changes from the Evaluation Governance Committee.`,
    technologies: ["Document Management Systems (DMS)", "Document Imaging Software"],
  },
  {
    year: "2019 - 2020",
    role: "Academic Record Specialist",
    company: "World Education Service",
    description: `Processed and matched incoming application-related mail and entered it into the tracking system. Cleared scanned non-original documents and ensured safe handling and return of original documents. Responsible for office mail distribution throughout departments across WES`,
    technologies: ["Tracking Systems", "Mail Management Software"],
  },
  {
    year: "2017 - 2019",
    role: "Web Designer",
    company: "Web Developer ",
    description: ` Completed detailed programming for front-end public and internal websites as well as challenging back-end server code. Collaborated with designers to create a clean interface and simple, intuitive interaction, and user experience. Ability to add/edit/delete pages, testimonials, pictures. Conducted quality assurance tests to enhance usability and functionality.`,
    technologies: ["Html", "CSS", "JavaScript", "JQuery"],
  },
  {
    year: "2019 - 2019",
    role: "Office Assistant (Volunteer)",
    company: "Chapnick Associate",
    description: `Scheduled appointments, meetings, and conferences for the employer.Responded to inquiries regarding refugee cases, sponsorship applications, and PR/Citizenship applications, working with clients to gather required information and documentation. Finalized documents after review by the Regulated Canadian Immigration Consultant (RCIC). Translated documents from Persian and Pashto into English.`,
    technologies: ["Microsoft Excel", "Microsoft Word"], 
  },
];

export const PROJECTS = [
  {
    title: "Data Visualization Projects",
    image: project1,
    link: "https://freecodecamp.org/certification/ShaqayeqSalimy/data-visualization",
    subprojects: [
      { name: "Visualize Data with a Bar Chart", description: "An interactive bar chart that visualizes GDP data over time, featuring D3-generated axes, dynamic tooltips, and responsive design to meet all specified user story requirements." },
      { name: "Visualize Data with a Scatterplot Graph", description: "A scatterplot graph visualizing data points with axes generated using D3.js, featuring dynamic tooltips and a legend for clear data interpretation." },
      { name: "Visualize Data with a Heat Map", description: "A heat map visualizes global temperature data over time, with color-coded cells representing data points. The map includes axes, a legend, and dynamic tooltips for interactive exploration." },
      { name: "Visualize Data with Choropleth Map", description: "A choropleth map displaying U.S. education data by county using D3.js." },
      { name: "Visualize Data with Treemap Diagram", description: "A treemap that displays hierarchical data using nested rectangles with D3.js." }
    ],

    technologies: ["HTML", "CSS", "JavaScript", "D3.js"],
  },
  {
    title: "Front End Development Libraries Projects",
    image: project2,
   
    link: "https://freecodecamp.org/certification/ShaqayeqSalimy/front-end-development-libraries",
    subprojects: [
      { name: "Build a Random Quote Machine", description: "A machine that generates random quotes and allows users to tweet them." },
      { name: "Build A Markdown Previewer", description: "A live markdown previewer built using React." },
      { name: "Build a Drum Machine", description: "An interactive drum machine built with React for playing sounds via keyboard or mouse." },
      { name: "Build a JavaScript Calculator", description: "A functional calculator built using React and JavaScript." },
      { name: "Build a 25+5 Clock", description: "A countdown timer and clock built using React." }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Responsive Web Design",
    image: project3,
    link: "https://freecodecamp.org/certification/ShaqayeqSalimy/responsive-web-design",
    subprojects: [
      { name: "Survey Form", description: "A simple responsive survey form built using HTML and CSS." },
      { name: "Tribute Page", description: "A tribute page dedicated to a famous personality, demonstrating basic HTML and CSS." },
      { name: "Technical Documentation Page", description: "A documentation page providing technical information with a clean layout." },
      { name: "Product Landing Page", description: "A landing page for a product with responsive design and call-to-action buttons." },
      { name: "Personal Portfolio WebPage", description: "A personal portfolio page showcasing projects and skills." }
    ],
    technologies: ["HTML", "CSS", "JavaScript" ],
  },
  {
    title: "Portfolio",
    image: project4,
    link: "https://shaqayeq6.github.io/Portflio-/ ",
    subprojects: [
      { name: "Initial Personal Portfolio", description: "Designed and built this portfolio to highlight my skills, projects, and experience, using a minimalist approach with responsive features for an optimal user experience." }
      
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Greater Toronto Area, Canada",
  phoneNo: "shaqayeq.salimy@gmail.com ",
  email: "salimys@my.yorku.ca",
};
