

export const trdMvArrray = [
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzjSOno8g779jAuOHOpHVfgOkkAVze8DCr1t53Ho&usqp=CAE&s",
    title: "Bliss",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT3ELhsOQDy7LcPo5jKmXBactgA3lwFc30ZznHreuphWi4tNAC",

    title: "Malcolm & Marie",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLT83SjKpjZ6TNkc8yknTzLgDTdXPZ5ayruRVjKEoTsc7Y2B4V",

    title: "wonder Women",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoyJ14ECfvL12lIrtKh3PTasl5sJZPVwwKrxymjTD1FP4wYgo",

    title: "New World",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFHymWc2LYI2eeq6H54T88hYv13kodmz8I2YoPt7_2xEOQRPO",

    title: "The little thing",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzjSOno8g779jAuOHOpHVfgOkkAVze8DCr1t53Ho&usqp=CAE&s",
    title: "Bliss",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRT3ELhsOQDy7LcPo5jKmXBactgA3lwFc30ZznHreuphWi4tNAC",

    title: "Malcolm & Marie",
    year: 2021,
  },
 
  {
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLT83SjKpjZ6TNkc8yknTzLgDTdXPZ5ayruRVjKEoTsc7Y2B4V",

    title: "wonder Women",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoyJ14ECfvL12lIrtKh3PTasl5sJZPVwwKrxymjTD1FP4wYgo",

    title: "New World",
    year: 2021,
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFHymWc2LYI2eeq6H54T88hYv13kodmz8I2YoPt7_2xEOQRPO",

    title: "The little thing",
    year: 2021,
  },
];

const maxWidth = window.innerWidth; 

const TrendingMovie = () => {

   

  return (
<>
    <h1 className="p-6 text-white">Trending Movies</h1>

    <div className="grid grid-cols-3 gap-4 pt-0 border-white border-solid p-7 sm:grid-cols-3 lg:grid-cols-5" style={{
          width: maxWidth > 620 ? "auto" : "auto",
          height: maxWidth > 620 ? "auto" : "auto",
        }}>
      {trdMvArrray.map(({ imgUrl, title, year }, index) => (
        <TrendMovUnit
          key={index}
          imgUrl={imgUrl}
          title={title}
          year={year}
          id={index}
        />
      ))}
    </div>

    </>
  );
};



const TrendMovUnit = ({ imgUrl, title, year, id }) => (
  <div className="cursor-pointer hover:opacity-80 "  >
    <div className="relative aspect-w-1 aspect-h-1 ">
      <img
        src={imgUrl}
        alt={`trdmovNo_${id}`}
        className="object-cover w-full h-full hover:opacity-80"
      />
    </div>
    <div className="relative bottom-0 p-2">
      <h3 className="pl-2 text-sm font-bold text-left text-white">{title}</h3>
      <p className="pl-2 text-sm font-semibold text-left text-white">{year}</p>
    </div>
  </div>
);


export default TrendingMovie;

export {TrendMovUnit} ; 
