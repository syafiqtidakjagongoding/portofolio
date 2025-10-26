import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import programmerIlustration from "/picture/illustration/peoplewithlaptopillustration.webp";
import { FaOrcid } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import BrandingSosmed from "./BrandingSosmed";

const Branding = () => {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  const emailLink = isMobile
    ? "mailto:syafiq_1971@disroot.org"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=syafiq_1971@disroot.org";

  return (
    <main
      className="h-screen lg:justify-around shadow-xl justify-center w-full items-center flex text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle, #7800b2, #7300aa, #6d00a2, #68009b, #630093)",
      }}
    >
      <div
        className="w-full items-center lg:justify-start justify-center flex"
        data-aos="fade-right"
      >
        <div className="minilaptop:m-20 :hpm-10 m-5 minilaptop:p-4">
          <ol className="minilaptop:mb-0 hp:mb-1 mb-3">
            <BrandingSosmed
              icon={
                <BsInstagram
                  color="red"
                  className="text-2xl minilaptop:text-3xl"
                />
              }
              label={"instagram"}
              link={"https://www.instagram.com/ganzz_fikkzzz/"}
              animate={"fade-right"}
            />
            <BrandingSosmed
              icon={
                <BsGithub
                  color="black"
                  className="text-2xl minilaptop:text-3xl"
                />
              }
              label={"github"}
              link={"https://github.com/syafiqtidakjagongoding/"}
              animate={"fade-left"}
            />
            <BrandingSosmed
              icon={
                <CiMail
                  color="white"
                  className="text-2xl minilaptop:text-3xl"
                />
              }
              label={"email"}
              link={emailLink}
              animate={"fade-up"}
            />
            <BrandingSosmed
              icon={
                <FaOrcid
                  color="green"
                  className="text-2xl minilaptop:text-3xl"
                />
              }
              label={"orcid"}
              link={"https://orcid.org/0009-0008-7497-2175"}
              animate={"fade-up"}
            />
          </ol>
        </div>
        <div className="minilaptop:mr-0 mr-5">
          <h1
            className="minilaptop:text-4xl hp:text-2xl text-xl font-bold"
            data-aos="fade-right"
          >
            Hello I&rsquo;M Syafiq
            <br />
            I&rsquo;M A Fullstack Web Developer
          </h1>
          <p
            className="my-5 minilaptop:text-2xl tablet:text-xl text-md font-bolder font-poppins sm:text-md"
            data-aos="fade-right"
          >
            I Live In Sidoarjo, East Java Indonesia
            <br />I Will Make Your Better Website
          </p>
          <div className="flex w-full gap-4">
            <Link
              to="/services"
              className="shadow-4xl font-semibold bg-gray-200 text-purple-900 minilaptop:py-3 py-2 px-6 rounded-xl minilaptop:text-lg hp:text-sm text-xs"
              data-aos="fade-down"
            >
              Service
            </Link>
            <Link
              to="https://www.cake.me/syafiq-paradisam"
              target="_blank"
              className="shadow-4xl font-semibold text-gray-200 border-gray-200 border bg-purple-900 minilaptop:py-3 py-2 px-6 rounded-xl minilaptop:text-lg hp:text-sm text-xs"
              data-aos="fade-down"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-1/2 minilaptop:block hidden">
        <img
          src={programmerIlustration}
          className="rounded-lg minilaptop:w-4/4"
          alt="profileku"
        />
      </div>
    </main>
  );
};

export default Branding;
