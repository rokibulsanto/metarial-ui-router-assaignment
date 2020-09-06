
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postStyle from './PostDetails.css';
import Comment from '../Comment/Comment';



const PostDetails = () => {
    const{postId} = useParams();
    const [post,setPost] = useState({});
    const [comments,setComments] = useState([]);
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    useEffect(()=> {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url2)
        .then(res => res.json())
        .then(data => setComments(data))
    },[]);
   
    return (
        <div className="postStyle">
            <div>
                    <h2 className="id">Id: {post.id}</h2> <hr/>
                    <h3 className="title">Title: {post.title}</h3>
                    <h5 className="body">Post: {post.body}</h5>

            </div>

            <div>
                   <h4>Comments: {comments.length}</h4>
                    {
                     comments.map(comment => <Comment comment={comment}></Comment>)
                  
                    }
                    
                       
             </div>
        </div>
        
    );
};

export default PostDetails;