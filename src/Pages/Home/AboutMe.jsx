import { Flex, Stack, UnorderedList, VStack, Text, Heading } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <section className="about--section" id="AboutMe">
      <div className="about--section--img">
        <img src="./img/userAbout.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <Heading
            fontSize={"56px"}
            fontWeight={"700"}
            lineHeight={"67px"}
            className="skills-section--heading">About Me</Heading>
          <VStack alignItems={"left"} className="hero--section-description" color="#919497" fontSize={20}>

            <Text mb="10px" className="hero--section-description" >
              Hello , I am Aarif and I enjoy doing coding{" "}
            </Text>
            <Text mb="10px" className="hero--section-description" >
              An aspiring Full Stack Developer with 800+ hours of coding
              experience in JavaScript.
            </Text>
            <Text mb="10px" className="hero--section-description" >
              A dedicated team player enthusiastic to be part of a reputed
              company. Always looking forward to learning something new to
              strengthen skills learned.
            </Text>
            <Text mb="10px" className="hero--section-description" >
              Fast Forwarding to today, I built a number of web applications and 3 major projects. learned a great deal about teamwork, leadership, and communication.
            </Text>
            <Text mb="10px" className="hero--section-description" >My Interest in Travelling</Text>

          </VStack>
        </div>
      </div>
    </section>
  );
}
