import React from 'react';

const Article = () => {
    return (
        <div>
           <div className='d-flex justify-content-around'>
            <div>
            <nav class="nav">
               <a class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
               <a class="nav-link disabled" href="#">Article</a>
               <a class="nav-link disabled" href="#">Event</a>
               <a class="nav-link disabled" href="#">Education</a>
               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Job</a>
           </nav>
            </div>
            <div>
            <button type="button" class="btn btn-primary">Write a Post</button>
            <button type="button" class="btn btn-secondary">Join Group</button>
            </div>
           </div> 
        </div>
    );
};

export default Article;