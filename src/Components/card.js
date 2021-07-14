import React from 'react';
import {useSelector } from 'react-redux';
import {selectSignedIn} from "../features/userLogin";
import "../css/post.css"
import Navbar from "./Navbar";
const Blog = () => {
    const isSignedIn = useSelector(selectSignedIn);
    return (
        <>

        <div className="home_page">
            <h1 className="blog_page_name">
            </h1>
            {isSignedIn && (<div class="card">
            <div>
                <h4><b>New post</b></h4>

                </div>

            </div>)}  
            
        </div>
        
        </>
    );
}

export default Blog;
