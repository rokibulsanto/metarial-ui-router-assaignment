import React from 'react';
import { useState, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';




const HomePost = () => {
    const [allpost,setAllPost] = useState([]);
    useEffect(()=> {
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPost(data))
    },[])
    
    return (
        <div>
            <h2 style={{textAlign:'center'}}>AllPost: {allpost.length}</h2> 

            {
                allpost.map(post => <PostCard post={post}></PostCard>)
            }
        </div>
    );
};

export default HomePost;