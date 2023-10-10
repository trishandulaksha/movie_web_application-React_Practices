import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getInputData } from '../../Context/InputDataContext';
import {  useNavigate, } from 'react-router-dom';









const HeaderSection = () => {

  const {setInputdata} = useContext(getInputData) 

  const [retstate,setretState] = useState(false);

    const [searchstate,setState] =useState('')

    const navigate = useNavigate()

    const handlKeypress=(e)=>{
      if (e.key==="Enter"){
        setInputdata(e.target.value);
        navigate('/search')
      }

    }
   
    
 

  return (
    <div className='  flex fixed bg-slate-800 overflow-hidden w-full  p-4 z-[100]'>
        
      <h3 className='text-3xl font-bold text-white cursor-pointer hover:font-extrabold' 
      onClick={(e)=>
      {setretState(true)
        navigate('/')
      
      
      
      }}>Vilm</h3>


        

        <div className="flex items-center content-center ml-auto rightSection ">
              
                <input type="text" placeholder='Search ' className='p-1 pl-2 font-bold text-white rounded-md cursor-pointer bg-slate-500 hover:bg-slate-950 focus:outline-none' style={{
                    display:window.innerWidth < 620 ? !searchstate ?  'none' : 'block' : 'block',
                    
                }} onKeyPress={handlKeypress}/>
                
                <div ><SearchIcon sx={{
                    color: 'white',
                    width:'32px',
                    height:'32px',
                    cursor: 'pointer',
                    
               

                    display: window.innerWidth < 620 ? !searchstate?  'block': 'none':'none',
                   
                                    

                }} onClick={()=>{
                    if(window.innerWidth < 620){
                    setState(!searchstate)

                }
                }} ></SearchIcon></div>
                
                
        </div>
        
    </div>


    
  )
}

export default HeaderSection