//import logo from "../assets/Salimy4Logo.png";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      <div className="flex flex-shrink-0 items-center">
        {/* Replace the <img> with the LuFlower2 icon */}
        <LiaLaptopCodeSolid className="mx-2 w-10 h-10 text-white" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon with a link */}
        <a 
          href="https://www.linkedin.com/in/shaqayeqsalimy " 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a 
          href="https://github.com/your-profile-link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          <FaGithub />
        </a>

        

      
      </div>
    </nav>
  );
};

export default Navbar;
