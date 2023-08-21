import { Box, Center, HStack, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { PiHeartStraightFill, PiHeart } from "react-icons/pi"

// 인터페이스임을 의미하는 대문자 I를 붙여줌 
interface IRoomProps { 
    imageUrl:string; 
    name:string; 
    city:string;
    country:string;
    price:number;
    rating:number;
    reviewCount: number;
}

export default function Room({imageUrl, name, city, country, price, rating, reviewCount}:IRoomProps) {
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
                    <Image src={imageUrl} fit={"cover"} />
                </Center>

                <Box position={"absolute"} top={0} right={0} textColor={"white"} cursor={"pointer"}>
                    <IconButton aria-label="Like" icon={<PiHeart />} size={"lg"} color={"white"} variant={"unstyle"}></IconButton>
                </Box>

            </Box>
            <Box p={2}>
                <HStack gap={0.5} mb={"1"} h={"5"}>
                    <Text px={0.5} fontSize={"2xs"} color={"white"} bg={"teal.300"} width={"fit-content"} borderRadius={"sm"}>NEW</Text>
                    <Text px={0.5} fontSize={"2xs"} color={"white"} bg={"red.300"} width={"fit-content"} borderRadius={"sm"}>HOT</Text>
                </HStack>
                <Heading fontSize={"sm"} noOfLines={1}>{name}</Heading>
                <Text fontSize={"xs"} color={"gray"}>{city}, {country}</Text>
                <Text fontSize={"xs"}><b>$</b> <b>{price}</b> / <span>wk</span></Text>
                <HStack mt="1.5">
                    <HStack fontSize={"xs"} textColor={"teal.400"} gap={0.5}> 
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                        <BsStar />
                    </HStack>
                    <Text fontSize={"xs"} color="gray"><span>{reviewCount}</span> reviews</Text>
                </HStack>
            </Box>
        </Box>
    );
}