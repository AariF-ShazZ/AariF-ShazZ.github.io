import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Flex, Heading } from "@chakra-ui/react"
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  const pdfPath = process.env.PUBLIC_URL + 'Aarif-Khan-Resume.pdf';
  const openDriveLink = (driveLink) => {
    window.open(driveLink, '_blank');
  };
  
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Flex>

          <Heading color={"red"} fontWeight={"800"}>Por</Heading> <Heading fontWeight={"800"}>tFoliO</Heading>
        </Flex>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyProjects"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Github"
              className="navbar--content"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <a
        onClick={() => {
          closeMenu()
          openDriveLink('https://drive.google.com/file/d/19T2RfJ0SRDWPDT3sHdZsl0D9vq0zHnF9/view?usp=sharing');
        }}
        href={pdfPath}
        target="#" 
        download="Aarif-Khan-Resume.pdf"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-outline-primary"
      >
        Resume
      </a>
    </nav>
  );
}
export default Navbar;
