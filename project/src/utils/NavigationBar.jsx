import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import "../index.css";
import routes from "../routes";

const NavigationBar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [transition, setTransition] = useState(
    "minilaptop:translate-x-0 translate-x-[1000px] w-full"
  );

  window.document.body.onclick = (e) => {
    if (e.target.classList.contains("others")) {
      setTransition("minilaptop:translate-x-0 translate-x-[0px] w-full");
    }
    if (
      !e.target.classList.contains("sidebar") &&
      !e.target.classList.contains("menubar") &&
      !e.target.classList.contains("menubarsvg") &&
      !e.target.classList.contains("others")
    ) {
      setHamburgerMenu(false);
      setTransition("minilaptop:translate-x-0 translate-x-[1000px] w-full");
    }
    return;
  };

  useEffect(() => {
    if (hamburgerMenu && window.innerWidth >= 700) {
      setTransition("minilaptop:translate-x-0 translate-x-[1000px] w-full");
    }
    if (window.innerWidth >= 700) {
      setHamburgerMenu(false);
    }
  }, [hamburgerMenu]);

  return (
    <nav
      className={`w-full flex items-center flex-row shadow-4xl minilaptop:sticky relative`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #7800b2, #7300aa, #6d00a2, #68009b, #630093)",
      }}
    >
      <div className="minilaptop:m-5 m-2 flex minilaptop:justify-center items-center justify-between minilaptop:w-36 w-full">
        <Link
          to={"/"}
          aria-label=""
          className="text-white font-helvetica font-bold  font-mono text-2xl flex"
        >
          <FaCode color="black" />
          Syafiq
        </Link>
        {/* HAMBURGER MENU */}
        <button
          name="hamburgermenu"
          className="minilaptop:hidden block hover:bg-purple-500 p-3 rounded-lg menubar"
          onClick={() => {
            setHamburgerMenu((v) => !v);
            if (hamburgerMenu) {
              setTransition("translate-x-[1000px] w-full");
            } else {
              setTransition(
                "minilaptop:translate-x-0 translate-x-[0px] w-full"
              );
            }

            return;
          }}
        >
          <SlMenu
            className="menubarsvg"
            color="white"
            size={"25px"}
            style={{ fontWeight: "bolder" }}
          />
        </button>
      </div>
      <div
        className={`flex minilaptop:pl-0 minilaptop:static z-50 absolute justify-start w-full items-start flex-col minilaptop:flex-row `}
      >
        <ol
          className={`flex items-center justify-center others transition-transform duration-200 ease-in-out  font-semibold minilaptop:bg-none bg-primary minilaptop:rounded-none rounded-sm minilaptop:gap-0 ${transition} minilaptop:static absolute top-8 flex-col minilaptop:flex-row `}
        >
          <li className="text-white minilaptop:text-white minilaptop:hidden flex rounded-md minilaptop:w-28 w-full minilaptop:text-center text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.home}
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Home
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:w-28 w-full minilaptop:text-center text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.project}
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Project
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:w-28 w-full minilaptop:text-center text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.blog}
              target="_blank"
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Blog
            </Link>
          </li>
          <li className="text-white minilaptop:text-white rounded-md minilaptop:text-center flex minilaptop:w-28 w-full text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.contact}
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Contact
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:text-center minilaptop:w-28 w-full text-left font-medium  hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.skill}
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Skill
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:text-center minilaptop:w-36 w-full text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to={routes.achiviement}
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Achiviement
            </Link>
          </li>
        </ol>
      </div>

      {/* SOSMED */}
    </nav>
  );
};

export default NavigationBar;
