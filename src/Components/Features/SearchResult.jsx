import { useContext } from "react"
import { FilmData, searchMovie } from "../../Context/InputDataContext";

import { useNavigate } from "react-router-dom";
import { TrendMovUnit } from "../Sections/PageContent/PageCenter/TrendingMovie";





const SearchResult = () => {
 
    const {searchData} = useContext(searchMovie)
    const maxWidth = window.innerWidth;
    const {setFilmData} = useContext(FilmData)
    const navigate = useNavigate()


    const handlemovieClick = (imgUrl,title,year)=>{
      setFilmData({imgUrl,title,year})
      navigate('/FilmDescription')
    }

  return (

    
    <div>
       <div className="relative grid grid-cols-3 gap-4 border-white border-solid p-7 pt-28 sm:grid-cols-3 lg:grid-cols-5 " style={{
          width: maxWidth > 620 ? "auto" : "auto",
          height: maxWidth > 620 ? "auto" : "auto",
        }}>
        {searchData.map((movie ,index,id) => {
          

        const title = movie["#TITLE"];
        const year = movie["#YEAR"];
        const imageURl = movie["#IMG_POSTER"];
        console.log(title, year, imageURl,id);


        return(
          <div
           key={index}
           onClick={()=>handlemovieClick(imageURl,title,year)}
          
          >
        
        
        
        <TrendMovUnit
        key={index}
        imgUrl={imageURl}
        title={title}
        year={year}
        id={index}


        />
</div>


        );
      })}
      </div>
    </div>
  );
};




export default SearchResult

