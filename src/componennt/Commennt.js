import {Component} from "react";

class Commennt extends Component{

    render() {
        const {id, name, email} = comment
        return(
            <div>
                <div><b>id:</b> {id}</div>
                <div><b>name:</b> {name}</div>
                <div><b>email:</b> {email}</div>
            </div>
        )
    }
}
export {
    Commennt
}