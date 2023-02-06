import {Component} from "react";
import {commentsService} from "../services/commentsService";
import {Post} from "./Post";

class Comments extends Component{
    constructor(props) {
        super(props)
        this.state =  {comments:[]}
    }
    componentDidMount() {
        commentsService.getAll().then(({data}) => this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment => <Post key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}
export {
    Comments
}