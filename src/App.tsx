import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import { ForgotPassword } from "./components/ForgotPass";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={LogIn} />
          <Route path="/forgotpassword" Component={ForgotPassword} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}
