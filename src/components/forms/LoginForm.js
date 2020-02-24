import React from 'react'

class LoginForm extends React.Component {
   render() {
      return (
         <div className = 'login-form'>
            <h4>Please Login Below</h4>
            <form class="col s12">
               <input type='text' name='username' placeholder='Create a username'/>
               <input type='text' name='email' placeholder='Email address'/>
               <input type='text' name='password' placeholder='Enter password' />
               <button>Sign Up!</button>
            </form> 
         </div>
      )
   }

}

export default LoginForm