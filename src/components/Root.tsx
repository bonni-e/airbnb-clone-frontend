import { Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
    <div>
        <Text fontSize={"2xl"} color={"red.500"}>I'm Root</Text>  
        {/* Outlet : children 으로 등록된 컴포넌트를 렌더링해줌  */}
        <Outlet />
    </div>
    );
}