import React from 'react'
import {Button,FormControl,FormGroup} from 'react-bootstrap'

interface Status {
  email: string,
  password: string
}
class FormContainer extends React.Component<any, Status> {
  constructor(props:any) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  public onChangetext = (e:any, type:string) => {
    if(type === "email"){
      this.setState({email: e.target.value})
    }else if(type === "password") {
      this.setState({password: e.target.value})
    }
  }
  public hundleSubmit = (e:any, type:string):void => {
    if(type === "login"){
      this.props.loginUser(this.state.email, this.state.password)
      // リダイレクト
    }
  }

  public render(){
    return(
      <div>
      <form>
        <FormGroup controlId="formBasicText">
          email
          <FormControl
            type="email"
            value={this.state.email}
            placeholder="Enter text"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={ (e:any) => this.onChangetext(e, "email") }
          />
          <br />
          password
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Enter text"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={ (e:any) => this.onChangetext(e, "password") }
          />
        </FormGroup>

      </form>
      <Button type="submit" onClick={ (e:any) => this.hundleSubmit(e, "login") }>ログイン</Button>
      </div>
    )
  }
}

export default FormContainer