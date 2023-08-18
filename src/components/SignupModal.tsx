import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa"
import { RiLockPasswordFill, RiCharacterRecognitionFill } from "react-icons/ri"
import { GrMail } from "react-icons/gr"
import SocialLoginButtons from "./SocialButtons";

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
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
                                <InputLeftElement children={<FaUserAlt />} color={"red.200"} />
                                <Input placeholder="username" variant={"outline"} ></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiLockPasswordFill />} color={"red.200"} />
                                <Input placeholder="password" variant={"outline"} type="password"></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<RiCharacterRecognitionFill />} color={"red.200"} />
                                <Input placeholder="name" variant={"outline"} type="text"></Input>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={<GrMail />} color={"red.200"} />
                                <Input placeholder="email" variant={"outline"} type="email"></Input>
                            </InputGroup>
                        </VStack>
                        <Button width={"100%"} colorScheme="red" my={5}>Sign up</Button>
                        <SocialLoginButtons />
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}