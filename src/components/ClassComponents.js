import {Component} from "react";

class ClassComponents extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state ={a: 0, b: 30}
    }

   componentDidMount() {
       console.log("ComponentDidMounnt");
   }

   getSnapshotBeforeUpdate(prevProps, prevState) {
     if (prevState.a > 7){
         return 'a > 7'
     }else {
         return 'null'
     }
   }

   componentWillUnmount() {
       console.log("componentWillUnmount");
   }

    componentDidUpdate(prevProps, prevState, snapshot) {
       console.log("componentDidUpdate");
       console.log("prevProps", prevProps);
       console.log("prevState", prevState);
       console.log("snapshot", snapshot);

   }

   inc(){
       this.setState(prev => ({a: prev.a + 1}))
   }

    render() {
        console.log("render");
        return(
            <div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}
export {ClassComponents};