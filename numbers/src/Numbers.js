import React from "react";
import { useState,useEffect } from "react";

const Numbers=()=>{
    const [data,setData]=useState();
     useEffect(()=>{
        // console.log(data);
        fetch(data).
        then(res => res.json()).
        then((data)=>setData(data)).catch(err=> console.log(err));
     },) 
     console.log(res);
    return(
        <div>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            <p>{data}</p>
            {/* {data && data.map(()=>{
                <li>{data.numbers}</li>
            })} */}
        </div>
    )
}
export default Numbers

