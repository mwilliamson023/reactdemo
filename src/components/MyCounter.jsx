import { useState } from "react";





const MyCounter = () => {

    console.log(props)

    // let countState = 77
    const [countState, setCountState] = useState(77)


    function incCount() {
        // countState++
        setCountState(countState + props.incCount)
    }


    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default MyCounter;