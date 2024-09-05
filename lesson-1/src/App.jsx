import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/home' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
         </Router>
      </>
   );
};

export default App;
