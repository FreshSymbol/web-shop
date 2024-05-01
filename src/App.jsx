import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage";
import BasketPage from "./pages/BasketPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
