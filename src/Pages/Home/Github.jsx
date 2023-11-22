import { Box, Flex, Heading, VStack, Text, Image } from "@chakra-ui/react";
import Githubcalendar from "react-github-calendar"
export default function GitHub() {

  return (
    <section className="testimonial--section" id="Github">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <Heading className="sections--heading" fontSize={"40px"}>
            Github Graph & Github Statistics
          </Heading>
        </div>
      </div>
      <Box className="portfolio--section--container">
        <Box py="40px" m="auto" h="auto">
          <Flex ml={["-25px", "-50px", "-25px", "-55px"]} align="center" justify="center" gap={5} flexDirection="column">
            <Flex ml={["2%", "-20px", "-25px", "-55px"]} pl={"-5%"} direction={"column"}>
              <Image
                w={[250, 300, 500, 600]}
                my={"2%"}
                src="https://camo.githubusercontent.com/2918164358b81dfb0899d99bc97873dd42d9b3f887cf1961504026321db8a066/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d41617269462d5368617a5a26686964655f7469746c653d7472756526686964655f626f726465723d747275652673686f775f69636f6e733d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c696e655f6865696768743d323126746578745f636f6c6f723d3030302669636f6e5f636f6c6f723d3030302662675f636f6c6f723d302c6561363136312c6666633634642c6666666334642c353266613561267468656d653d677261797768697465"
                alt="Description"
              />

              <Image
                w={[250, 300, 500, 600]}
                my={"2%"}
                src="https://github-readme-stats.vercel.app/api?username=aarif-shazz&theme=default&show_icons=true&locale=en"

                alt="Description"
              />
              <Image
                w={[250, 300, 500, 600]}
                h={[200, 200, 400, 500]}
                mt={"2%"}
                src="https://camo.githubusercontent.com/23cdc06e7e281f3853445eccf143b55b82351372cbb7def363096df8726d81b1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d41617269462d5368617a5a26686964655f7469746c653d7472756526686964655f626f726465723d747275652673686f775f69636f6e733d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c696e655f6865696768743d323126746578745f636f6c6f723d3030302669636f6e5f636f6c6f723d3030302662675f636f6c6f723d302c6561363136312c6666633634642c6666666334642c353266613561267468656d653d677261797768697465"
                alt="Description"
              />
              {/* </Text> */}
            </Flex >
            <Box mt={"7%"}
              display={["none", "none", "none", "block"]}
            >
              <Githubcalendar
                style={{ background: "black", color: "gray",padding:"1%"  }}
                username="AariF-ShazZ"
                blockSize={12}
                fontSize={16}
              />

            </Box>
            <Box mt={"10%"}
              display={["block", "block", "block", "none"]}
            >
              <Image src="./img/githubStatus.png"
                alt="githubImage"
              />

            </Box>
          </Flex>
        </Box>
      </Box>
    </section>

  );
}
