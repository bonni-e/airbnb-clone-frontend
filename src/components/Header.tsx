import {
    Box, Button, HStack, IconButton, Text, useDisclosure,
} from "@chakra-ui/react";
import { SiAirbnb } from "react-icons/si";
import { GiMoon } from "react-icons/gi"
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Header() {
    // // Hook Utility
    const { isOpen:isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure()
    const { isOpen:isSignupOpen, onOpen:onSignupOpen, onClose:onSignupClose } = useDisclosure()

    return (
        <Box>
            <HStack justifyContent={"space-between"} px={5} py={10} borderBottomWidth={"thin"}>
                <HStack>
                    <Text fontSize={"2xl"} color={"red.500"}><SiAirbnb /></Text>
                    <Text fontSize={"2xl"} color={"red.500"}>Airbnb</Text>
                </HStack>
                <HStack spacing={"1"}>
                    // aria-label : 시각 장애인이 오디오로 리딩하는 정보
                    <IconButton aria-label="Toggle dark mode" icon={<GiMoon />} size={"sm"} variant={"ghost"} />
                    <Button size={"sm"} colorScheme="red" onClick={onLoginOpen}>Log in</Button>
                    <Button size={"sm"} onClick={onSignupOpen}>Sign in</Button>
                </HStack>
            </HStack>

            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
        </Box>
    );
}