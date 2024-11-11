import logo from "../assets/logoBTransparent.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-40" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bhavyalalchandani/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/bhavyaLalchandani">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/bhavya1008/">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;