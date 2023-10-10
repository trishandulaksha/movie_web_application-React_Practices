import React, { useContext } from "react";
import { FilmData } from "../Context/InputDataContext";

const FilmDecriptionPage = () => {
  const { filmData } = useContext(FilmData);

  return (
    <>
      <div>
        <img
          src={filmData.imgUrl}
          alt="bgimage"
          className="w-full h-[480px] absolute"
        />
      </div>
      <div className="relative flex pl-7 pt-96">
        <img
          src={filmData.imgUrl}
          alt="bgimage"
          style={{
            width: window.innerWidth < 620 ? "90px" : "130px",
            border: "4px solid white",
          }}
        />
        <div className="p-10 pt-32 text-white reative">
          <div className="font-bold Mname">{filmData.title}</div>
          <br />
          <div className="font-semibold Myear">{filmData.year}</div>
        </div>
      </div>
    </>
  );
};

export default FilmDecriptionPage;
