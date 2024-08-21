import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:itemId" element={<ItemDetailsPage />} />
    </Routes>
  );
}

export default App;
