import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/sora";

import App from "./App";
import "./index.css";

const theme = extendTheme({
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
