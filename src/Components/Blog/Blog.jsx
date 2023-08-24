import React from 'react';
import './Blog.css'
import Question from '../Question/Question';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='knowledge-container'>
               <h3>this is knowledge container</h3>
               <Question></Question>
            </div>
            <div className='cart-container'>
               <h3>this is cart container</h3>
            </div>
        </div>
    );
};

export default Blog;