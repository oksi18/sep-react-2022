import React, {useEffect, useState} from "react";
import {Comment} from "../Comment/Comment";
import {commentsService} from "../../services/commentsService";

const Comments = ({comments}) => {

return(
    <div>

        {comments.map(comment => <Comment key={comment.postId} comment={comment}/> )}
    </div>
)
}

export {Comments};