import React ,{useEffect, useState}from 'react'
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  console.log(searchQuery);

useEffect(()=>{
  const timer=setTimeout(()=>getSearchSuggestions(),200);
  return()=>{
    clearTimeout(timer);
  };
},[searchQuery]);

const getSearchSuggestions = async()=>{
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  console.log(json);
  setSuggestions(json[1]);
};

  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer" alt="menu" 
        src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <img className="h-8" alt="youtube-icon" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"/>
      </div>
      <div className="col-span-10">
        <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"type="text"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
       </div>
       {showSuggestions && 
       <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s)=>(
              <li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍{s}</li>
            ))}
            
          </ul>
       </div>
}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
  )
}

export default Head;