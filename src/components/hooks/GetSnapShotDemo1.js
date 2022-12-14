import React, { useEffect, useRef, useState } from "react";

export default function GetSnapShotDemo1() {
    const [count, setCount] = useState(0);
    const myRef = useRef();    
    useEffect(() => {
      myRef.val = count;
    });
    return (
      <h1>
        Now: {count}, before: {myRef.val}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
      </h1>
    );
}
