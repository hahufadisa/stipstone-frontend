import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/critical.scss";
import "./styles/fonts.css";
import "./styles/index.scss";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
