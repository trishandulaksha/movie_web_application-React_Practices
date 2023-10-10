import React from 'react'
import Main from '../Components/MainComponent/Main'
import MainBody from '../Components/Section/MainBody'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import SearchResult from '../Components/MainComponent/SearchResult'
import FilmInfo from '../Components/MainComponent/FilmInfo'
import FilmDecription from '../Pages/FilmDecription'





const ResultRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<MainBody />} />
        
        <Route element={<FilmInfo/>}  >
              <Route path='search' element={<SearchResult/>}/>
              
        </Route>    
          <Route path='FilmDescription' element={<FilmDecription/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

        
  )
}

export default ResultRouter