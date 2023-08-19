import React,{useEffect, useState} from 'react'
import './inputCity.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const InputCity = ({cityNotFound,sendDataToParent}:any) => {
  const[inputloc,setInputLoc]=useState("Modasa");
  const[emptyLoc,setEmptyLoc]=useState("");

  const sendLocation =(e:any)=>{
    e.preventDefault();
    sendDataToParent(inputloc);
    
    if(inputloc==""){
      setEmptyLoc("please enter city name")
    }
    else if(cityNotFound=="city not found"){
      setEmptyLoc("Please Enter Valid Location")
    }
    else if(cityNotFound==""){
      setEmptyLoc("")
    }
    else{
      setEmptyLoc("")
    }
  }
  
 useEffect(()=>{

 },[])
 

  return (
   <>
   <div className="input-city">
       <form className="input-box" onSubmit={sendLocation}>
        <input type="text" placeholder='📍' name='location' value={inputloc} onChange={(e)=>setInputLoc(e.target.value)}/>
        <div className="logo" onClick={sendLocation}><SearchRoundedIcon className='search-logo'/></div>
       </form>
       <div className='emptybox'>{emptyLoc}</div>
   </div>
   </>
  )
}

export default InputCity