import aboutImg from "../assets/about1.jpg";
import {ABOUT_TEXT} from "../constants";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", color: "text-purple-500" },
      { name: "Java", color: "text-purple-500" },
      { name: "C#", color: "text-purple-500" },  
      { name: "C", color: "text-purple-500" },  
      { name: "PL/SQL", color: "text-purple-500" }
    ]
  },
  
  {
    category: "Databases",
    items: [
      { name: "SQL Server", color: "text-purple-500" },
      { name: "Relational databases", color: "text-purple-500" }
    ]
  },
  {
    category: "Software Development",
    items: [
      { name: "Object-Oriented Programming", color: "text-purple-500" },
      { name: "Java APIs", color: "text-purple-500" }
    ]
  }
];

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 max-w-screen-xl mx-auto">
        <h1 className="my-20 texte-center text-4xl">About 
        <span className="text-neutral-500"> me</span> </h1>
        <p className="text-neutral-500 italic text-sm">Grounded, yet reaching for the sky!</p>
        <div className="flex flex-wrap lg:flex-nowrap">
            <motion.div
             whileInView={{opacity:1, x:0}}
             initial= {{opacity:0, x:-100}}
             transition={{duration:0.5}}
             className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <img className="rounded-2xl  max-w-full" src= {aboutImg} alt="about" />
              </div>
              
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x: 100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:pl-4 max-w-md mx-auto ">
               <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-lg py-6" >{ABOUT_TEXT}</p>
                
               </div>

           {/* New Section for Skills */}
           <div className="flex flex-col mt-6 space-y-4 max-w-md text-sm">
            {skills.map((skill, index) => (
              <div key={index}>
                <h5 className="text-xl font-bold">{skill.category}:</h5>
                <ul className="list-disc pl-5">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className={item.color}>{item.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


            </motion.div>
              
        </div>
     </div>
  )
}

export default About