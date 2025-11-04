import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { SearchResults } from "./pages/SearchResults";
import { ListingDetail } from "./pages/ListingDetail";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
