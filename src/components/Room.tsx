import { Box, Center, HStack, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { PiHeartStraightFill, PiHeart } from "react-icons/pi"

export default function Room() {
    return (
        <Box h={"fit-content"} borderWidth={"thin"} borderRadius={
            {
                base: "lg",
                "2xl": "2xl"
            }
        } overflow={"hidden"}>
            <Box position={"relative"} borderBottomWidth={"thin"} overflow={"hidden"}>
                <Center h={
                    {
                        sm: "60vw",
                        md: "30vw",
                        lg: "160px",
                        xl: "120px",
                        "2xl": "8vw"
                    }
                } >
                    <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720" fit={"cover"} />
                </Center>

                <Box position={"absolute"} top={0} right={0} textColor={"white"} cursor={"pointer"}>
                    <IconButton aria-label="Like" icon={<PiHeart />} size={"lg"} color={"white"} variant={"unstyle"}></IconButton>
                </Box>

            </Box>
            <Box p={2}>
                <HStack gap={0.5} mb={"1"}>
                    <Text px={0.5} fontSize={"2xs"} color={"white"} bg={"teal.300"} width={"fit-content"} borderRadius={"sm"}>NEW</Text>
                    <Text px={0.5} fontSize={"2xs"} color={"white"} bg={"red.300"} width={"fit-content"} borderRadius={"sm"}>HOT</Text>
                </HStack>
                <Heading fontSize={"sm"} noOfLines={1}>Modern home in city center in the heart of</Heading>
                <Text fontSize={"xs"} color={"gray"}>Seoul, S.Korea</Text>
                <Text fontSize={"xs"}><b>$</b> <b>1,900.00</b> / <span>wk</span></Text>
                <HStack mt="1.5">
                    <HStack fontSize={"xs"} textColor={"teal.400"} gap={0.5}>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                        <BsStar />
                    </HStack>
                    <Text fontSize={"xs"} color="gray"><span>88</span> reviews</Text>
                </HStack>
            </Box>
        </Box>
    );
}