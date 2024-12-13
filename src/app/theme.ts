// theme.ts
import { createTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",  // Default to light mode
    useSystemColorMode: false,  // Disable system color mode auto-switch
  },
});

export default theme;
