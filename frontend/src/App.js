import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemEditPage from "./pages/ItemEditPage";
import ItemCreatePage from './pages/ItemCreatePage';
import Header from "./components/Header";


function App() {
  const location = useLocation();

  const noHeaderPaths = [""];

  const showHeader = !noHeaderPaths.includes(location.pathname);
  return (
    <>
    {showHeader && <Header />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:itemId" element={<ItemEditPage />} />
      <Route path="/create-item" element={<ItemCreatePage />} />
    </Routes>
    </>
  );
}

export default App;
