import {
    Box, Button, HStack, IconButton, LightMode, Text, useColorMode, useColorModeValue, useDisclosure,
} from "@chakra-ui/react";
import { SiAirbnb } from "react-icons/si";
import { GiMoon } from "react-icons/gi"
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Header() {
    // // Hook Utility
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
    const { isOpen: isSignupOpen, onOpen: onSignupOpen, onClose: onSignupClose } = useDisclosure();
    const { colorMode, toggleColorMode, } = useColorMode();
    
    const logoColor = useColorModeValue("red.500", "white");
    // 컴포넌트도 지정할 수 있음 
    // const Icon = useColorModeValue(<GiMoon />, <GiMoon />);

    return (
        <Box>
            <HStack justifyContent={"space-between"} px={5} py={10} borderBottomWidth={"thin"}>
                <HStack>
                    <Text fontSize={"2xl"} color={"red.500"}><SiAirbnb /></Text>
                    <Text fontSize={"2xl"} color={logoColor}>Airbnb</Text>
                </HStack>
                <HStack spacing={"1"}>
                    // aria-label : 시각 장애인이 오디오로 리딩하는 정보
                    // colorMode === 'light' ? 달아이콘 : 해아이콘 
                    <IconButton aria-label="Toggle dark mode" icon={<GiMoon />} size={"sm"} variant={"ghost"} onClick={toggleColorMode} />
                    // 라이트모드 유지 
                    <LightMode>
                        <Button size={"sm"} colorScheme="red" onClick={onLoginOpen}>Log in</Button>
                    </LightMode>
                    <Button size={"sm"} onClick={onSignupOpen}>Sign in</Button>
                </HStack>
            </HStack>

            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
        </Box>
    );
}