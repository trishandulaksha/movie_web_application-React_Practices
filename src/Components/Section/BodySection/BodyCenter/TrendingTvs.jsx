import React from 'react'
import { TrendMovUnit } from './TrendingMovie'
import { trdMvArrray } from './TrendingMovie'


const maxWidth = window.innerWidth;

const TrendingTvs = () => {
  return (
    <div>
        <h1 className="p-6 text-white">Trending Tvs</h1>
        
        <div className="relative grid grid-cols-3 gap-4 pt-0 border-white border-solid p-7 sm:grid-cols-3 lg:grid-cols-5 " style={{
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
        
    </div>
  )
}

export default TrendingTvs