import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaOrcid } from "react-icons/fa";

const Footer = () => {
  const goto = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  const emailLink = isMobile
    ? "mailto:syafiq_1971@disroot.org"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=syafiq_1971@disroot.org";

  return (
    <footer className="w-full flex flex-col shadow-lg bg-purple-800 tablet:pt-5 pt-10 text-white bg-right bg-no-repeat bg-cover">
      <div className="flex justify-around w-full h-full items-center tablet:items-start pb-8 tablet:px-0 px-2 uppercase flex-wrap tablet:gap-0 gap-10">
        <div className="flex leading-7 text-left flex-col items-start tablet:justify-start">
          <h1 className="font-bold text-lg mb-2">Menu</h1>
          <Link to={"/"} onClick={goto}>
            Home
          </Link>
          <Link to={"/project"} onClick={goto}>
            Projects
          </Link>
          <Link to={"https://blog.syafiq-paradisam.my.id"} onClick={goto}>
            Blog
          </Link>
          <Link to={"/testimoni"} onClick={goto}>
            Testimoni
          </Link>
          <Link to={"/contact"} onClick={goto}>
            Contact
          </Link>
          <Link to={"/services"} onClick={goto}>
            Services
          </Link>
          <Link to={"/howToOrder"} onClick={goto}>
            Instruction
          </Link>
          <Link to={"/achievement"} onClick={goto}>
            Achievement
          </Link>
        </div>
        <div className="flex leading-7 text-left flex-col items-start tablet:justify-start">
          <h1 className="font-bold text-lg mb-2">Services</h1>
          <Link to={"/services"} onClick={goto}>
            <p>Web develop</p>
          </Link>
          <Link to={"/services"} onClick={goto}>
            <p>Refactor code</p>
          </Link>
          <Link to={"/services"} onClick={goto}>
            <p>React Developer</p>
          </Link>
          <Link to={"/services"} onClick={goto}>
            <p>Nodejs Developer</p>
          </Link>
          <Link to={"/services"} onClick={goto}>
            <p>Golang Developer</p>
          </Link>
        </div>
        <div className="flex flex-col leading-7 text-left items-start  tablet:justify-start">
          <h1 className="font-bold text-lg mb-2">About Us</h1>
          <Link to={"/#experience"} onClick={goto}>
            <p>EXPERIENCE</p>
          </Link>

          <a
            href="https://smkantartika2-sda.sch.id"
            target="_blank"
            rel="noreferrer"
          >
            <p>SCHOOL</p>
          </a>
          <a
            href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=="
            target="_blank"
            rel="noreferrer"
          >
            <p>TEAMS</p>
          </a>
        </div>
        <div className="flex leading-7 tablet:text-left flex-col text-center items-start tablet:justify-start">
          <h1 className="font-bold text-lg mb-2">Achievement</h1>
          <Link to={"/achievement"} onClick={goto}>
            <p>DICODING</p>
          </Link>

          <Link to={"/achievement"} onClick={goto}>
            <p>FREECODECAMP</p>
          </Link>
          <Link to={"/achievement"} onClick={goto}>
            <p>LEETCODE</p>
          </Link>
          <Link to={"/achievement"} onClick={goto}>
            <p>W3SCHOOLS</p>
          </Link>
          <Link to={"/achievement"} onClick={goto}>
            <p>Competition</p>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col bg-purple-500 text-purple-900 justify-center items-center font-extrabold pt-3 gap-1">
        <div className="flex items-center text-white gap-4">
          <a
            href="https://www.instagram.com/ganzz_fikkzzz/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full border-white border-2 border-solid p-2">
              <BsInstagram size={"25px"} />
            </div>
          </a>
          <a
            href="https://github.com/syafiqtidakjagongoding"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full border-white border-2 border-solid p-2">
              <BsGithub size={"25px"} />
            </div>
          </a>
          <a
            href={emailLink}
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full border-white border-2 border-solid p-2">
              <CiMail size={"25px"} />
            </div>
          </a>
          <a
            href="https://orcid.org/0009-0008-7497-2175"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full border-white border-2 border-solid p-2">
              <FaOrcid size={"25px"} />
            </div>
          </a>
        </div>
        <div className="flex text-white items-center gap-1 pt-2">
          <BiCopyright />
          <p>Copyright 2023 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
