import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/inter";
import Theme from "./components/theme";
import Main from "./main.tsx";
import About from "./about.tsx";
import Play from "./play.tsx";
import Error from "./404.tsx";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Play />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}
