import { Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;