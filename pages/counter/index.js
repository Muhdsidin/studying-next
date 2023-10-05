const { useState } = require("react")

function counter (){
    const [count , setCount] = useState(0)
    const increament = ()=>{
        if(count == 10){
            return setCount(10)
        }
        setCount((prev)=> prev + 1)
    }

    const decreament = ()=>{
        if(count == 0){
            return setCount(0)
        }
        setCount((prev)=> prev - 1)
    }
    return (
        <>
        <h2>
            Count : {count}
        </h2>
        <button onClick={increament}>ADD ONE</button>
        <button onClick={decreament}>MINUS ONE</button>
        </>
    )
}

export default counter