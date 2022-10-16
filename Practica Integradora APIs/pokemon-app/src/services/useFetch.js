import { useState, useEffect } from "react";
import axios from 'axios';

export const statuses = {
  LOADING: "Loading...",
  OK: "OK",
  ERROR: "ERROR",
}

export const useFetch = (url, options = null) => {
  const [data, setData] = useState(null);
  const [ status, setStatus ] = useState(null);

  useEffect( async() =>{
    setStatus(statuses.LOADING);

    try{
      const results = await axios.get(url, options);
      results.then((res) => {
        if(!res.ok){
          console.log(res.statusText);
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        console.log("fetch data: " + data);
        setData(data);
      })
      .then(() => {
        setStatus(statuses.OK);
      });
    } catch(err){ console.log(err); }
  }, [url])

  return { data, status };
}

