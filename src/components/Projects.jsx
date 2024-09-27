
import { useState } from "react";
import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const DescriptionModal = ({ description, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Project Description</h3>
        <p>{description}</p>
        <button 
          className="mt-4 px-4 py-2 bg-purple-800 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};



const Project = () => {
  const [activeDescription, setActiveDescription] = useState(null); 
  const handleDescriptionClick = (description) => {
    console.log('Description clicked:', description);
    setActiveDescription(description);
  };
  
  const closeModal = () => {
    setActiveDescription(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) =>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
           
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial= {{opacity:0, x:-100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4">
            <div className="w-[200px] h-[200px] flex-shrink-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer"> 
            <img 
            
            src={project.image} 
            width={150} 
            height={150} 
            alt={project.title} />
            </a>
            </div>
           </motion.div>

          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial= {{opacity:0, x:100}}
          transition={{duration:1}}
          className= "w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{project.title}</h6>
       
          
          <ul className="mb-4 text-neutral-400" style={{ whiteSpace: 'pre-wrap' }}>
            {project.subprojects && project.subprojects.map((subproject, i) => (
              <li key={i} className="mb-2">
                 {subproject.name}
                 {/* Add the 'Description' link */}
                  <button 
                    className="ml-2 text-purple-800 underline"
                     onClick={() => handleDescriptionClick(subproject.description)}
      >
        Description
      </button>
    </li>
  ))}
</ul>


          {project.technologies.map((tech, index) => (
            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              {tech}
            </span>
          ))}
          </motion.div>
        </div>
        ))}

{activeDescription && (
        <DescriptionModal 
          description={activeDescription} 
          onClose={closeModal} 
        />
      )}

      </div>
    </div>
  )
}

export default Project