import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import RegisterPage from "./pages/register/RegisterPage";
import NoFooterLayout from "./components/NoFooterLayout";
import LoginPage from "./pages/login/LoginPage";
import ResetPage from "./pages/reset/ResetPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<NoFooterLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
