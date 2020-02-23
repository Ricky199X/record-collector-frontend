import React from 'react'
import SignupForm from './SignupForm'


class SignUpPage extends React.Component {
   render() {
      return (
         <div class="row">
            <div className="col-md-4 col-md-offset-4">
               <SignupForm />
            </div>
         </div>
      )
   }

}



export default SignUpPage