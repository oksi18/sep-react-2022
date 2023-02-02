
import {ClassComponents} from "./components/ClassComponents";
import {useState} from "react";
import {FunctionComponent} from "./components/FunctionComponent";


const App = () => {
    const [flag,setFlag] = useState(true)
  return (
   <div>
       {flag && <FunctionComponent/>}
       <button onClick={() => setFlag(prev => !prev)}>Hide</button>
   </div>
  );
}

export {App};
