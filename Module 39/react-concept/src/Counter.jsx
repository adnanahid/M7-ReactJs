import { useState } from "react";

export default function Counter(){
    const [team, setCount] = useState(2)

    const handleLike = ()=>{
        setCount(team + 1)
    }
    const handleUnLike = ()=>{
        setCount(team - 1)
    }
return(
    <div>
        <h3>Likes:{team}</h3>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnLike}>UnLike</button>
    </div>
)
}