import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
const SkillsCard = ({id,icon,text}) => {
    return (
        <div>
            <div className="card">
                <div className="bg">
                <Image src={icon} w={"70%"} mt={"5%"} mr={"5%"} ml={"15%"} mb={"18%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} _hover={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"}} borderRadius={"10%"}/>
                <Flex px={"2%"} alignItems={"center"} justifyContent={"center"} fontSize={"20px"} fontWeight={800} color={"red"}>{text}</Flex>
                </div>
                <div className="blob"></div>
            </div>

        </div>
    )
}

export default SkillsCard