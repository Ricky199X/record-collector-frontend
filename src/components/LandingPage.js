// functional component 
import React from 'react'



const LandingPage = () => {
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

export default LandingPage

// <Route exact path='/sign_up' component={SignupForm} />
//         <Route path='/login' component={LoginForm} /> 