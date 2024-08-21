import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemEditPage from "./pages/ItemEditPage";
import ItemCreatePage from './pages/ItemCreatePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:itemId" element={<ItemEditPage />} />
      <Route path="/create-item" element={<ItemCreatePage />} />
    </Routes>
  );
}

export default App;
