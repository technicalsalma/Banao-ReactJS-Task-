import React from 'react';
import Article_img from '../assest/images/Rectangle 5.png'
import Sarthak from '../assest/images/Rectangle 3 (1).png'
import view from '../assest/images/Vector (1).png'
import {GoLocation} from 'react-icons/go'
import {MdEdit} from 'react-icons/md'
import {AiOutlineEye} from 'react-icons/ai'
import dote from '../assest/images/Vector (2).png'
import vector from '../assest/images/Vector (3).png'


const Article = () => {
    return (
        <div>
            
           <div className='d-flex justify-content-around mt-2 article'>
            <div>
            <nav class="nav">
               <a class="nav-link text-dark" aria-current="page" href="#">All Posts(32)</a><hr/>
               <a class="nav-link disabled" href="#">Article</a>
               <a class="nav-link disabled" href="#">Event</a>
               <a class="nav-link disabled" href="#">Education</a>
               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Job</a>
           </nav>
           
            </div>
            <div>
            <button type="button" class="btn btn-secondary mx-3">Write a Post</button>
            <button type="button" class="btn btn-primary">Join Group</button>
            </div>
            
           </div> 
           <hr/>

           {/*Article Card Start*/}
    <div className='d-flex justify-content-around mt-2'>
     <div class="card" style={{"width": "692px"}}>
  <img src={Article_img} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <div className='text-start'>
    <h5 class="card-title">✍️ Article</h5>
    <div className='d-flex justify-content-between'>
    <h4 class="fw-bold" style={{'width':'600px',}}>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
    <img src={dote} alt=''className='mt-3' style={{'width':'18px', 'height': '5px'}}/>
    </div>
    <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
    </div>
    
    <div className='d-flex justify-content-between mt-3'>
        <div  className='d-flex align-items-center'>
        <img src={Sarthak} alt=''></img>
        <h4 className='ps-2'>Sarthak Kamra</h4>
        </div>
        <div className='d-flex align-items-center'>
         <AiOutlineEye className=''/>   
         <p className='px-2 pt-3'>1.4kviews</p>
         <img className='' style={{'width':'13px', 'height': '14px'}} src={view} alt=''></img>
        </div>
    </div>
  </div>
</div>

<div>
<div className='d-flex justify-content-between'>
    <div className='d-flex'>
    <GoLocation className='mt-1'/>
    <p className='ps-2'>Noida, India</p>
    </div>
    <div className='d-flex ms-5 ps-5 mt-3'>
        <MdEdit/>
    </div>
</div>
<hr/>
<div className='d-flex'>
    <img className='mt-1' style={{'width':'13px', 'height': '13px'}} src={vector} alt=''></img>
    <p className='ps-2'>Your location will help us serve better <br/> and extend a personalised experience.</p>
    </div>
</div>
</div>
</div>
       
    );
};

export default Article;