import React, { useContext, useEffect,  } from "react";
import { getInputData } from "../../Context/InputDataContext";
import { searchMovie } from "../../Context/InputDataContext";
import SearchResult from "./SearchResult";

const FilmInfo = () => {

  const { inputdata } = useContext(getInputData);
  const {setSearchData} = useContext(searchMovie);

 
  useEffect(() => {  
    if (inputdata) {
      const getResult = async () => {
        const url = `https://imdb-search2.p.rapidapi.com/${inputdata}`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "1b9c051e0fmsh1268804e927279ap18046bjsn004da64692ed",
            "X-RapidAPI-Host": "imdb-search2.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          
            setSearchData(result.description);

          
        } catch (error) {
          console.error(error);
        }
      };

      getResult();
    }
  }, [inputdata, setSearchData]);

  return (
    <div>
       <SearchResult/>
     
    </div>
  );
};


export default FilmInfo;

const MovieData =()=>{
   

}

MovieData()
