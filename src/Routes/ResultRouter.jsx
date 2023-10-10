import React from "react";


import { BrowserRouter, Route, Routes } from "react-router-dom";




import FilmDecriptionPage from "../Pages/FilmDecriptionPage";
import MainLayout from "../Components/Features/MainLayout";
import MainSection from "../Components/Sections/MainSection";
import SearchResult from "../Components/Features/SearchResult";
import FilmInfo from "../Components/Features/FilmInfo";

const ResultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainSection />} />

          <Route element={<FilmInfo />}>
            <Route path="search" element={<SearchResult />} />
          </Route>
          <Route path="FilmDescription" element={<FilmDecriptionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ResultRouter;
