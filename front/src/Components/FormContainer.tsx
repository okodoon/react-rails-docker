import React from 'react'
import {Button,FormControl,FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../actions/user'

interface Status {
  email: string,
  password: string,
  message: string
}
class FormContainer extends React.Component<any, Status> {
  constructor(props:any) {
    super(props)
    this.state = {
      email: '',
      message: '',
      password: '',
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
      this.props.login(this.state.email, this.state.password)
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

const mapStateToProps = (state:any) => ({
  isPlusmode: state.count.isPlusmode,
  num: state.count.num,
})

const mapDispatchToProps = (dispatch:any) => ({
  login: (email:string, password:string) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)