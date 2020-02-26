// functional component 
import React from 'react'


class LandingPage extends React.Component {
   render() {
      return (
         <div className="container">
            <div className="greeting">
               <h5>Please Sign Up or Log In</h5>
            </div>
            <div className="signup-link">
               <a href="sign_up">Sign Up</a>
            </div>
            <div className="login-link">
               <a href="login">Log In</a>
            </div>
            
         </div>
      )
   }
}

export default LandingPage

