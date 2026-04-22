import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoFooterLayout from "./components/NoFooterLayout";
import LoginPage from "./pages/login/LoginPage";
import ResetPage from "./pages/reset/ResetPage";
import Support from "./pages/support/Support";

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
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
