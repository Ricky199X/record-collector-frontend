// functional component

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Nav extends React.Component {
   render() {
      return (
         <nav>
            <div className="nav-wrapper container">
               <a className="brand-logo">Record Collector</a>
               <ul className = "right">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/albums">Records</Link></li>
                  <li><Link to="/your-albums">Your Records</Link></li>
               </ul>
            </div>
         </nav>
      )
   }
}

export default Nav