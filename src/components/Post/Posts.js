

const Post = ({post, setPostDetails}) => {
    const {id, title, body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={()=>setPostDetails(post)}>GetDetails</button>
        </div>
    )

}
export {Post};