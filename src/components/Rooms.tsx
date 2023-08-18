import { Box, Center, Grid, HStack, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import Room from "./Room";

export default function Rooms() {
    return (
        // <Grid templateColumns={"repeat(5, 1fr)"} columnGap={4} rowGap={8}>
        <Grid templateColumns={
            {
                // base : 모바일 사용자를 위한 value
                // base: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(5, 1fr)",
                "2xl": "repeat(8, 1fr)",
            }
        } columnGap={4} rowGap={8}>
            {[1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(index =>
                <Room />
            )}
        </Grid>
    );
}