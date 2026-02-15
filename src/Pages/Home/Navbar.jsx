import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive((prev) => !prev);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openDriveLink = (driveLink) => {
    window.open(driveLink, "_blank");
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="1000"
      bg="rgba(10,10,15,0.95)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      className={`navbar ${navActive ? "active" : ""}`}
    >
      <Flex
        maxW="1300px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Brand */}
        <Flex direction="column" cursor="pointer">
          <Heading fontSize="22px" fontWeight="800" color="white">
            Aarif<span style={{ color: "#ff0055" }}>.dev</span>
          </Heading>
          <Text fontSize="11px" color="gray.400" letterSpacing="wide">
            Full Stack Developer
          </Text>
        </Flex>

        {/* Hamburger */}
        <Box
          display={{ base: "block", lg: "none" }}
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </Box>

        {/* Navigation Links */}
        <Flex
          as="ul"
          gap={10}
          align="center"
          className={`navbar--items ${navActive ? "active" : ""}`}
        >
          {[
            ["Home", "heroSection"],
            ["About", "AboutMe"],
            ["Skills", "mySkills"],
            ["Projects", "MyProjects"],
            ["GitHub", "Github"],
            ["Contact", "Contact"],
          ].map(([label, to]) => (
            <li key={to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy
                smooth
                offset={-80}
                duration={500}
                to={to}
                className="navbar--content"
              >
                {label}
              </Link>
            </li>
          ))}
        </Flex>

        {/* Resume Button */}
        <Button
          size="sm"
          bg="linear-gradient(135deg,#ff0055,#ff7a18)"
          color="white"
          _hover={{
            transform: "translateY(-1px)",
            boxShadow: "0 10px 25px rgba(255,0,85,0.35)",
          }}
          transition="all 0.3s ease"
          onClick={() =>
            openDriveLink(
              "https://drive.google.com/file/d/1hO4XMMxV2ygppxbAizenVU57XgrU7xNu/view?usp=sharing"
            )
          }
        >
          Resume
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
