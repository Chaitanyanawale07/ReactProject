import { useState } from "react";

const CounterNew=()=>
{
    const [c1,setCount]=useState(50)

    return <div>
        <h1>count is {c1}</h1>
        <button onClick={()=>{setCount(c1+1);}}>Click Here</button>
    </div>
}

export default CounterNew;