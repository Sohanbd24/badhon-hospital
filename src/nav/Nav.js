import React from 'react';
import'./Nav.css'

const Nav = () => {
    return (
        
         <div className='for-nav'>
     <div >
         <h1>Welcome to emergency hospital</h1>
         
     </div>

       
           <a href='/header'>Home</a>
           <a href="/services">- Our services</a>
           <a href="/login"> -Login</a>
       

         </div>
        
    );
};

export default Nav;
            