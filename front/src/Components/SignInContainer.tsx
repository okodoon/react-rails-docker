import axios from 'axios'
import React from 'react'
import FormContainer from './FormContainer'

class SignInContainer extends React.Component<{}> {

  public createUser = (email: string, password: string): void => {
    console.log(email)
    console.log(password)
    axios.post('http://localhost:3000/v1/users/signup', { email, password } )
    .then((response) => {
      console.log(response)
      // if response.token exist
      // response.email
    }).catch((error) => {
      console.log(error.response)
    })
  }

  public loginUser = (email: string, password: string): void => {
    console.log(email)
    console.log(password)
    axios.post('http://localhost:3000/v1/users/signin', { email, password } )
    .then((response) => {
      console.log(response)
      console.log(response.data.email)
      console.log(response.data.token)
      // if response.token exist
      // response.email
    }).catch((error) => {
      console.log(error.response)
    })
  }

  public render() {
    return (
      <div className='app-main'>
        oajfa
        {this.loginUser("okodo@example.com", "password")}
        <FormContainer loginUser={this.loginUser} />
      </div>
    );
  }
}

export default SignInContainer
