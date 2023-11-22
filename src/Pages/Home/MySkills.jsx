import { Grid, Heading } from "@chakra-ui/react";
import SkillsCard from "../../Components/SkillsCard";
import {skills} from "../../data/index";
import {} from "@chakra-ui/react"
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <Heading className="skills--section--heading" fontSize={"40px"}>My Skills</Heading>
      </div>
      <div className="skills--section--container">
      <Grid w="auto" p="10px" templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"]} gap={20}>
      {skills?.map((item, index) => (
          <SkillsCard id={index} icon={item.icon} text = {item.text}/>
        ))}
      </Grid>
        
      </div>
    </section>
  );
}
