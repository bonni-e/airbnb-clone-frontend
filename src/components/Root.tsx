import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function Root() {
    return (
        <Box>
            <Header />
            {/* Outlet : children 으로 등록된 컴포넌트를 렌더링해줌  */}
            <Outlet />
            <Footer />
        </Box>
    );
}