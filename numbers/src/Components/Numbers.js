import React from "react";
import { useState,useEffect } from "react";

const Numbers=()=>{
    const [data,setData]=useState();
     useEffect(()=>{
        console.log(data);
        fetch(data).
        then(res => res.json()).
        then((data)=><Ascending/>).catch(err=> console.log(err));
     },[data]) 
    return(
        <div>
            <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
            
        </div>
    )
}
export default Numbers

