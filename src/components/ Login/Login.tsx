import React from 'react';
import {SuperInput} from "../Super/SuperInput/SuperInput";
import {Field, reduxForm} from "redux-form";



const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }
  return <LoginReduxForm onSubmit={onSubmit}/>
}

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1>Login</h1>
      {/*<SuperInput callBack={()=>{}} text={''} title={'Login'} error={''}/>*/}
      {/*<SuperInput callBack={()=>{}} text={''} title={'Password'} error={''}/>*/}
      <div>
        <Field placeholder='Login' name='login' component='input'/>
      </div>
      <div>
        <Field placeholder='Password' name='password' component='input'/>
      </div>
      <div>
        <Field component='input' name='remember me' type='checkbox'/>
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm
