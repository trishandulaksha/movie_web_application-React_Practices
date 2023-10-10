import { createContext, useState } from "react";


export const getInputData = createContext()


export const searchMovie = createContext([])

export const FilmData =  createContext({})

const InputDataContext = ({children}) => {

    const [inputdata,setInputdata] = useState({});

    const [searchData,setSearchData] = useState([])

    const [filmData,setFilmData] = useState({})

  return (
    <getInputData.Provider value={{inputdata,setInputdata}}>
        <searchMovie.Provider value={{searchData,setSearchData}}>
          <FilmData.Provider value={{filmData,setFilmData}}>
        {children}
        </FilmData.Provider>
        </searchMovie.Provider>
    </getInputData.Provider>
  )
}

export default InputDataContext
