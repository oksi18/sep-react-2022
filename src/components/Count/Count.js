import {useState} from "react";

const Count = () => {
    const [b, setB] = useState(0)

    return (
        <div>
            <div>B: {b}</div>
        </div>
    )
}
export {Count};