import {Simpsons} from "./components/Simpsons/Simpsons";
import {Characters} from "./components/RickMorty/Characters";
import './components/Simpson/Simpson.css'
import './components/Rick and Morty/Character.css'
const App = () => {
  return (
      <div>
       <Simpsons/>
       <Characters/>
      </div>
  );
};

export {App};