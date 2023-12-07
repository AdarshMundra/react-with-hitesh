import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/adarshmundra")
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);
    const data = useLoaderData()
    return (
        <div
            className=" text-center m-4 bg-gray-600 text-white text-4xl p-4
    "
        >
            Github Followers {data.followers}
        </div>
    );
}

export default Github ;

export const githubInfoLoader=async () =>{
    const response= await fetch('https://api.github.com/users/adarshmundra')
    return response.json()
}
