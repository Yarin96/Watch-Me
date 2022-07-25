import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavProvider } from "./context/FavContext";
import { SearchProvider } from "./context/SearchContext";
import { BgProvider } from "./context/BgContext";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Action from "./pages/Genre/Action";
import Comedy from "./pages/Genre/Comedy";
import Drama from "./pages/Genre/Drama";
import Favorites from "./pages/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <BgProvider>
      <FavProvider>
        <SearchProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/action" element={<Action />} />
                  <Route path="/comedy" element={<Comedy />} />
                  <Route path="/drama" element={<Drama />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </SearchProvider>
      </FavProvider>
    </BgProvider>
  );
};

export default App;
