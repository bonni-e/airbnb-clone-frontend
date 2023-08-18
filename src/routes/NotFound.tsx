import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <VStack minH={"100vh"} justifyContent={"center"} bg={"gray.100"}>
            <Heading>Page not Found.</Heading>
            <Text>It seems that you're lost.</Text>
            <Link to={"/"}>
                <Button variant={"solid"} colorScheme="red">Go Home</Button>
            </Link>
        </VStack>
    );
}