import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/geeky-bhawuk-arora')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // })

    
    return (
        <>
        <div>
            GitHub Followers: {data?.followers}
        </div>
        <img src="{data?.avatar_url}" alt="NA" width={300} />
        </>
    )
}

export default Github

export const githubInfoLoader = async()=> {
    const response = await fetch("https://api.github.com/users/geeky-bhawuk-arora")
    return response.json()
}
