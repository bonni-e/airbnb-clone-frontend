import { Button, Input, InputGroup, InputLeftElement, LightMode, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa"
import { RiLockPasswordFill, RiCharacterRecognitionFill } from "react-icons/ri"
import { GrMail } from "react-icons/gr"
import SocialLoginButtons from "./SocialButtons";

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const iconColor = useColorModeValue("red.200", "gray.500");

    return (
        // Modal
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Sign up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={<FaUserAlt />} color={iconColor} />
                                <Input placeholder="username" variant={"outline"} ></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiLockPasswordFill />} color={iconColor} />
                                <Input placeholder="password" variant={"outline"} type="password"></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiCharacterRecognitionFill />} color={iconColor} />
                                <Input placeholder="name" variant={"outline"} type="text"></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<GrMail />} color={iconColor} />
                                <Input placeholder="email" variant={"outline"} type="email"></Input>
                            </InputGroup>
                        </VStack>
                        <LightMode>
                            <Button width={"100%"} colorScheme="red" my={5}>Sign up</Button>
                        </LightMode>
                        <SocialLoginButtons />
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}