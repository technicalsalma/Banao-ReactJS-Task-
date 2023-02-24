import React from 'react';
import Login from '../assest/images/Login.png'
import facebook from '../assest/images/facebook.png'
import Google from '../assest/images/search.png'

const SignUp = () => {
    return (
        <div>
            <div className='bg-success'>
            <h4 className='mt-5' style={{"backgroundColor":"#EFFFF4", "color":"#008A45"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h4>
            </div>
            
            <div>
             <div className='d-flex justify-content-around mt-5'>
                 <h1>Create Account</h1>
                <p>Already have an account? 
                    <span className='text-primary'>Sign In</span>
                </p>
            </div>
             <div className='d-flex justify-content-around mt-5'>
             <div  style={{'width':'350px'}}>
<form class="row">
  <div class="d-flex justify-content-center">
    <input style={{"backgroundColor":"#F7F8FA","borderRadius":"2px", "borderColor":"0"}} type="type" placeholder='First Name'/>
    <input type="type" placeholder='Last Name' style={{"backgroundColor":"#F7F8FA","borderColor":"#D9D9DB","borderRadius":"2px"}}/>
  </div>
 
    <input type="password" placeholder='Password' style={{"backgroundColor":"#F7F8FA","borderColor":"0", "borderRadius":"2px"}}/>
    <input type="password" placeholder='Password' style={{"backgroundColor":"#F7F8FA","borderColor":"#D9D9DB", "borderRadius":"2px"}}/>
    <input type="password" placeholder='Password' style={{"backgroundColor":"#F7F8FA","borderColor":"#D9D9DB", "borderRadius":"2px"}}/>
  
    <button type="submit" class="btn btn-primary mt-3">Create Account</button>

    <button type="submit" class="mt-3">
        <img className='p-2' src={facebook} alt=''/>
        Sign up with Facebook</button>
    <button type="submit" class="mt-3">
        <img className='p-2' src={Google} alt=''/>
        Sign up with Facebook</button>
    
  
</form>
</div>
    <div>
        <img src={Login} alt=''></img>
        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
    </div>
  </div>
  </div>
  </div>
    );
};

export default SignUp;