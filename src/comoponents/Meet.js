import React, { memo } from 'react';
import dote from '../assest/images/Vector (2).png'
import Article_img from '../assest/images/Rectangle 5 (1).png'
import {AiOutlineEye} from 'react-icons/ai'
import view from '../assest/images/Vector (1).png'
import Sarah from '../assest/images/Rectangle 3 (5).png'

const Meet = memo(() => {
    return (
        <div class="card mt-3 mb-5" style={{"width": "692px", 'marginLeft':'79px'}}>
        <img src={Article_img} class="card-img-top img-fluid" alt="..."/>
        <div class="card-body">
          <div className='text-start'>
          <h5 class="card-title">🗓️ Meetup</h5>
          <div className='d-flex justify-content-between'>
          <h4 class="fw-bold" style={{'width':'600px',}}>Finance & Investment Elite Social Mixer @Lujiazui</h4>
          <img src={dote} alt=''className='mt-3' style={{'width':'18px', 'height': '5px'}}/>
          </div>
          <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          
          <div className='d-flex justify-content-between mt-3'>
              <div  className='d-flex align-items-center'>
              <img src={Sarah} alt=''></img>
              <h4 className='ps-2'>Ronal Jones</h4>
              </div>
              <div className='d-flex align-items-center'>
               <AiOutlineEye className=''/>   
               <p className='px-2 pt-3'>1.4kviews</p>
               <img className='' style={{'width':'13px', 'height': '14px'}} src={view} alt=''></img>
              </div>
          </div>
        </div>
      </div> 
    );
});

export default Meet;