import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => { // & IProps - пропмы от родителской компоненты передаваемые через атрибуты
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Login' name='login' component='input'/>
      </div>
      <div>
        <Field placeholder='Password' name='password' component='input'/>
      </div>
      <div>
        <Field component='input' name='rememberMe' type='checkbox'/>
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)

export default Login
