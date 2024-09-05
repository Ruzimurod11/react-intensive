import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <div className='navWrapper'>
            <div className='container'>
               <Link className='navbar' to='/home'>
                  Home
               </Link>
            </div>
         </div>
         <h2 className='container'>Home</h2>
      </>
   );
};

export default Home;
