import React from 'react'
import Form from './Form'

class Signup extends React.Component {
   render() {
      return (
         <div className = 'signup-form'>
            <h4>Please Sign Up Below</h4>
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

export default Signup