import {useEffect, useState} from "react";

const FunctionComponent = () => {
    console.log("constructor");

    const [state, setState] = useState({a: 0, b: 30})

    useEffect(()=>{
        console.log("ComponentDidMounnt");
        return () => {
            console.log("componentWillUnmount");
        }
    })

    useEffect(() => {
        console.log("componentDidUpdate");
    },[state])

    const inc = () => {
        setState(prevState => ({a: prevState.a + 1, b: prevState.b }))

    }
    return(

        <div>
            {console.log("render")}
            <div>
                <div>A: {state.a}</div>
                <div>B: {state.b}</div>
                <button onClick={() => inc()}>inc</button>
            </div>
        </div>
    )
}
export {FunctionComponent};