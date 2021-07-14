import React from 'react';
import {useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import {selectSignedIn} from "../features/userLogin";
import "../css/post.css"
// import firebase from "./firebase"
import Navbar from "./Navbar";
const Blog = () => {
    // const [element, setElement] = useState(null);
    // useEffect(() => {
    //     setElement(fromJson)
    // }, []);
    // const ref = firebase.firestore().collection("Post");
    const [post_name, setName] = useState('');
    // const [comment,setcomment] =useState('');
    const addPost = post_name => {
        // ref.add({ post_name });
    };
  const handleChange = event => {
    setName(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addPost(post_name);
  };

    const isSignedIn = useSelector(selectSignedIn);
    return (
        <>

        <div className="home_page">
            <h1 className="blog_page_name">
            </h1>
            {isSignedIn && (<div>
                <form onSubmit={handleSubmit}>
            <label for="post"> Post Name:</label>
            <input type="text" id="post_name" name="post_name"></input>
            <label for="post"> Comment</label>
            <textarea type="text" id="comment" name="comment"/>
            <button onClick={handleSubmit} className="post">Add New Post</button>
            </form>
            </div>)}  
            
        </div>
        
        </>
    );
}

export default Blog;
