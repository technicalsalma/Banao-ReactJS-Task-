import React from 'react';
import Logo from '../assest/images/whole.png'



const Navbar = () => {
    return (
        
<nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-2">
  <div className="container-fluid">
    <img src={Logo} alt=''></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="mx-auto">
       <input type="search" placeholder="Search for your favorite groups in ATG" className='border-0 rounded bg-light p-2 ' style={{'width':'360px'}}/>
       <span><i class="bi bi-search"></i></span>
      </form>
      
      <div class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     <a href='/signup'> Create account.<span className='text-primary'> It’s free!</span></a>
  </div>     
     
    </div>
  </div>
</nav>

    );
};

export default Navbar;