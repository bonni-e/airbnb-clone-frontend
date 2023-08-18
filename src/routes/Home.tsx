import { Box } from "@chakra-ui/react";
import Rooms from "../components/Rooms";

export default function Home() {
    return (
        <Box minH={"70vh"} px={5} py={10}>
            <Rooms />
        </Box>
    );
}