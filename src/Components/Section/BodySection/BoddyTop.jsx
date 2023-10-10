
import pixel from "../../../Images/Spsweepers.jpg";
import StarIcon from "@mui/icons-material/Star";

const BoddyTop = () => {
  const maxWidth = window.innerWidth;

 

  return (
    <div className="">
      <img src={pixel} alt="" className="w-full opacity-30  sm:h-[650px]" />
      <h3
        className="absolute text-[36px] font-bold text-white top-[215px] ml-5   "
        style={{
          width: maxWidth < 620 ? "260px" : "auto",
        }}
      >
        Space <span>Sweepers</span>
      </h3>

      <p
        className="absolute text-white description top-[300px] ml-5 w-[680px]"
        style={{
          display: maxWidth < 620 ? "none" : "auto",
        }}
      >
        In the year 2092, space is full of dangerous floating garbage like
        discarded satellites and deserted spaceships. The crew of a space junk
        collector ship called The Victory discovers a humanoid robot that’s
        known to be a weapon of mass destruction. They get involved in a risky
        business deal and travel through space looking for garbage they can make
        money off of while also competing with rival junk collectors.
      </p>
      <div className="absolute flex " style={{top:maxWidth > 620 ?  '550px':'380px'}} >
        <p
          className="text-lg text-white pl-7 "
          style={{ display: maxWidth < 620 ? "auto" : "none" }}
        >
          2021
        </p>
        <span className="flex items-center justify-center pl-[35px] md:text-2xl text-white font-bold" style={{
          
          
        }}>
          <StarIcon sx={{
            
            justifyContent:'center',
            alignItems:'center',
            color:"white"

        }} className="pr-1 md:w-25px md:h-25pxs" />
          7.0
        </span>
      </div>
    </div>
  );
};

export default BoddyTop;
