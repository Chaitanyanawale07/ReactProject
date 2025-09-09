import { useState } from "react";

function Counter()
{
    const [count,setCount] =useState(0)
    const [dicrCount,setDicrCount]=useState(1000);
    const update=()=>{
        setCount(count+1);
        setDicrCount(dicrCount-1);
    

    }
    return(
        <div id="Counter">
            <p>Increment count: {count}</p>
            <p>Decrement count: {dicrCount}</p>
            <button onClick={update}>Update Counter</button><hr></hr>


        </div>
    );
}
export default Counter;