// functional component

import React from 'react'

const Nav = () => {
   return (
      <nav>
         <div className="nav-wrapper container">
            <a href="/home" className="brand-logo">Record Collector</a>
            <ul className = "right">
               <li><a href="/albums">Records</a></li>
               <li><a href="/your-albums">Your Records</a></li>
            </ul>
         </div>
      </nav>
   )
}

export default Nav