import { Button, Input, InputGroup, InputLeftElement, LightMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import SocialLoginButtons from "./SocialButtons";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const iconColor = useColorModeValue("red.200", "gray.500");
    
    return (
        // Modal
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Form  */}
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={<FaUserAlt />} color={iconColor} />
                                <Input placeholder="username" variant={"outline"} ></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiLockPasswordFill />} color={iconColor} />
                                <Input placeholder="password" variant={"outline"} type="password"></Input>
                            </InputGroup>
                        </VStack>
                        <LightMode>
                            <Button width={"100%"} colorScheme="red" my={5}>Log in</Button>
                        </LightMode>
                        <SocialLoginButtons />
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}