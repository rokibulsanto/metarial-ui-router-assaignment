import React, { useState, useEffect } from 'react';
import commentStyle from './Comment.css';


const Comment = (props) => {
    const{name,email,body,id} = props.comment;
    const [image,setImage] = useState([]);
    useEffect(()=>{
       const url =`https://jsonplaceholder.typicode.com/photos/${id}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setImage(data.url))
    },[])
    return (
        <div className="fullComment">
           
            <img style={{width:'60px',borderRadius:'50%'}} src={image} alt=""/>
            <h6 > <span className="commentName">Name: </span> {name}
            <small><p> <span className="commentEmail">Email: </span> {email}</p></small>
            <p> <span className="commentBody">Comment: </span> {body}</p>
            </h6>
           <hr/>
           
        </div>
    );
};

export default Comment;