import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemEditPage from "./pages/ItemEditPage";
import ItemCreatePage from "./pages/ItemCreatePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();

  const noHeaderPaths = ["/login"];

  const showHeader = !noHeaderPaths.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/items/:itemId" element={<PrivateRoute element={<ItemEditPage />} />} />
        <Route path="/create-item" element={<PrivateRoute element={<ItemCreatePage />} />} />
        <Route path="*" element={<PrivateRoute element={<HomePage />} />} />
      </Routes>
    </>
  );
}

export default App;
