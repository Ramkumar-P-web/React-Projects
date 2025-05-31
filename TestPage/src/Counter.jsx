import { useState } from "react";

function Counter(){
    
    const [count,setCount] = useState(0);

    function increase(){
        setCount((count)=> count+1);
        //This will not add two at a time
        /* setCount(count+1);
        setCount(count+1); */
        
        //This will
        //Updater function
        /* setCount((count)=> count+1);
        setCount((count)=> count+1); */
    };

    function decrease(){
        setCount(count-1);
    };

    return (
    <>
    <h2 className="m-5">Count {count}</h2>
    <button onClick={increase} className="btn btn-primary mx-5">Increase Count</button>
    <button onClick={decrease} className="btn btn-primary mx-5">Decrease Count</button>
    </>
    )
};
export default Counter;