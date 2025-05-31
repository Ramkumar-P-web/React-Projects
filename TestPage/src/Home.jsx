import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'

function Home(){
    
    const [posts,setPosts] = useState([]);
        useEffect(()=>{
            fetch("http://localhost:3000/posts")
            .then( response => response.json())
            .then((data)=>{
                setPosts(data);
                })
            .catch(error => console.log(error)
            )
           
         return ()=>{
            console.log('UnMounted Home Page!');
           
             }
        
        },[]); 
        const navigate = useNavigate();

    return (
        <>
        <h2 style={{color: 'white'}}>Home</h2>
        <Link className='btn btn-primary m-2' to="/post" >Post Page!</Link>
        <Link className='btn btn-primary m-2' to="/login" >Login Page</Link>
        <Link className='btn btn-primary m-2' to="/counter" >Counter Page</Link>
        <div className="row justify-content-center m-5" > {posts.map((post)=> (
            <div key={post.id} className="card m-2" onClick={()=>navigate('./post/'+post.id)} style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{post.subtitle}</h6>
                <p className="card-text">{post.summary}</p>
            </div>
            </div>)
        )}</div>
        </>
    );
};

export default Home;