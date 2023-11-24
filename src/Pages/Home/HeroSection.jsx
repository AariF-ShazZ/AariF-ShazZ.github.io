import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function HeroSection() {
  const pdfPath = process.env.PUBLIC_URL + 'Aarif-Khan-Resume.pdf';
  const openDriveLink = (driveLink) => {
    window.open(driveLink, '_blank');
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <Box className="hero--section--content" textAlign={"left"}>
          <Text className="section--title" fontSize={["25px", "25px", "35px", "35px"]} ml={["-10%", "-18%", "-18%", "0%"]} mb={["-10%", "-10px", "-10px", "-10px"]}>Hey, I'm Aarif</Text>
          <Heading textAlign={"left"} fontSize={["35px", "40px", "55px", "60px"]} className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </Heading>
        </Box>
        <Box mt={"15%"}>
          <a style={{ textDecoration: "none" }} onClick={() => {
            openDriveLink('https://drive.google.com/file/d/19T2RfJ0SRDWPDT3sHdZsl0D9vq0zHnF9/view?usp=sharing');
          }} target="#" href={pdfPath} download='Aarif-Khan-Resume.pdf'>
            <button className="btn btn-primary">Resume</button>
          </a>
        </Box>

      </div>
      <Flex className="hero--section--img" alignItems={"center"} justifyContent={"center"} w={["200px", "300px", "300px", "450px"]}>
        <Image src="./img/Aarif.png" alt="Hero Section" w={"100%"} />
      </Flex>
      <Box display={["block", "block", "block", "none", "none"]} position={"fixed"} top={"430px"} left={"30px"} zIndex={"1000"}>
        <a
          onClick={() => {
            openDriveLink('https://drive.google.com/file/d/19T2RfJ0SRDWPDT3sHdZsl0D9vq0zHnF9/view?usp=sharing');
          }}
          href={pdfPath}
          download="Aarif-Khan-Resume.pdf"
        >
          <button className="Btn">
            <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
            <span className="icon2"></span>
            <span className="tooltip">Download</span>
          </button>
        </a>
      </Box>
    </section>
  );
}
