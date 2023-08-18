import { Box, Button, Divider, HStack, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa"
import { RiKakaoTalkFill } from "react-icons/ri"

export default function SocialButtons() {
    return (
        <Box>
            
            <HStack>
                <Divider />
                <Text fontSize={"xs"}>Or</Text>
                <Divider />
            </HStack>
            <VStack my={5}>
                <InputGroup>
                    <InputLeftElement children={<FaGithub />} color={"gray.500"} />
                    <Button width={"100%"} colorScheme="blackAlpha">Continue with Github</Button>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement children={<RiKakaoTalkFill />} color={"yellow.500"} />
                    <Button width={"100%"} colorScheme="yellow">Continue with Kakao</Button>
                </InputGroup>
            </VStack>
        </Box>
    );
}