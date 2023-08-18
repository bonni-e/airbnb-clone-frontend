import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function RoomLoading() {
    return (
        <Box position={"relative"} h={"fit-content"} borderTopRadius={
            {
                base: "lg",
                "2xl": "2xl"
            }
        } overflow={"hidden"}>
            <Skeleton h={
                {
                    sm: "60vw",
                    md: "30vw",
                    lg: "160px",
                    xl: "120px",
                    "2xl": "8vw"
                }
            } />
            <Box position={"absolute"} top={5} right={5}>
                <SkeletonCircle colorScheme="blackAlpha" size={"20px"} />
            </Box>
            <SkeletonText noOfLines={4} px={2} mt={9} spacing={3} w={"70%"} />
        </Box>
    );
}