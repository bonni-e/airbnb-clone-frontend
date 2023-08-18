import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 다크모드 테마를 생성하고 확장함 
const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
    
}

const theme = extendTheme({ config });

export default theme;