
import { useState } from "react";
import { useParams } from "react-router-dom";

function Post(){
     const [post,setPost] = useState(null);  
    const {id} = useParams();
    
    fetch("http://localhost:3000/posts/"+id)
            .then( response => response.json())
            .then((data)=>{
                setPost(data);
                })
            .catch(error => console.log(error)
            )
             
             
    
    return (
        <div className="container m-5">
        {post && <div key={post.id} className="card m-2"  style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{post.subtitle}</h6>
            <p className="card-text">{post.content}</p>
        </div>
        </div>}
        </div>
    )
};
export default Post;