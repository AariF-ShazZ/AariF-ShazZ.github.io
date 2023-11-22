import { Box, Grid, Heading } from "@chakra-ui/react";
import Card from "../../Components/Card";
import {projects} from "../../data/index";
// import { project } from "../Components/Data/Project";

export default function MyProjects() {
  return (
    <section className="portfolio--section" id="MyProjects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <Heading className="section--heading" fontSize={"40px"}>My Projects</Heading>
        </div>
      </div>
      <Box w={"100%"} py={"4%"} className="portfolio--section--container">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} rowGap={10} columnGap={5}>

        {projects.map(({id,title , description, tech , img ,links }) => <Card key={id} title={title} description={description} tech={tech} img={img}  links={links} id={id}/>
        )}
        </Grid>
      </Box>
    </section>
  );
}
