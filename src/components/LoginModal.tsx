import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import SocialLoginButtons from "./SocialButtons";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
                                <InputLeftElement children={<FaUserAlt />} color={"red.200"} />
                                <Input placeholder="username" variant={"outline"} ></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiLockPasswordFill />} color={"red.200"} />
                                <Input placeholder="password" variant={"outline"} type="password"></Input>
                            </InputGroup>
                        </VStack>
                        <Button width={"100%"} colorScheme="red" my={5}>Log in</Button>
                        <SocialLoginButtons />
                    </ModalBody>
                    {/* <ModalFooter>
                                    <Button colorScheme="red" onClick={onClose}>Close</Button>
                                </ModalFooter> */}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}