import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Layout from "@/scenes/layout";
import { themeSettings } from "../theme";
import Home from "@/scenes/home";
import Advocate from "./scenes/advocate";
import Membership from "./scenes/membership";
import Admin from "./scenes/admin";

function App() {
  const mode = useSelector(((state) => state.global.mode));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/advocate" element={<Advocate />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;