import React, { Component } from 'react';

class LoginForm extends Component {

   constructor(props) {
      super(props) 

      this.state = {
         username: '',
         email: '',
         password: ''
      }
   }

   handleOnSubmit(event) {
      event.preventDefault()

   }

   handleOnChange(event) {
      this.setState({
         username: event.target.value,
      });
   }
  
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