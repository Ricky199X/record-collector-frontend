import React, { Component } from 'react'


class Form extends Component {

   render() {
      return (
         <div className="form">
            <form class="col s12">
               <input type='text' name='username' placeholder='Enter your Username'/>
               <input type='text' name='email' placeholder='Email address'/>
               <input type='text' name='password' placeholder='Enter password' />
            </form> 
         </div>
      )
   }
}