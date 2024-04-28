"use client";

import Image from "next/image";
import { Navigation } from "../components/navigation/Navigation";
import { useState, useEffect } from "react";

export default function Home() {

const[loading, setLoading] = useState(false);
const [data, setData] = useState();

const fetchDataFromApi = async () =>{
    try{
        setLoading(true);
        const response = await fetch("/api/ac", {
            headers:{
                Accept: "application/json",
                method: "GET",
            },
        });
        if(response){
            const data = await response.json();
            setData(data);
          }
    }
        catch (error){
            console.log(error);
        }finally{
            setLoading(false);
        }
};

  return (
    <main>
      <button onClick={fetchDataFromApi}>test</button>
      

    <Navigation />

</main>
  );
}
