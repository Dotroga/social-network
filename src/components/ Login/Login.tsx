import React from 'react';
import {useFormik} from "formik";
import {SuperInput} from "../Super/SuperInput/SuperInput";
import {SuperCheckbox} from "../Super/SuperCheckbox/SuperCheckbox";
import styled from "styled-components";
import {SuperButton} from "../Super/SuperButton/SuperButton";
import {login} from "../../Redux/authReducer";
import {useAppDispatch} from "../../Redux/reduxStore";

export type FormDataType = {
  email: string
  password: string
  rememberMe?: boolean
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      let errors: Partial<FormDataType> = {} // Partial<T> - делает все свойства переданного типа не обязательными
      if (!values.email) {
        errors.email = 'Email required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Password required'
      } else if (values.password.length < 3) {
        errors.password = 'Length should be more 3 symbols'
      }
      return errors
    },
    onSubmit: values => {
      dispatch(login(values))
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <SuperInput
        {...formik.getFieldProps('email')}
        error={formik.touched.email && formik.errors.email && formik.errors.email}
      />
      <SuperInput
        {...formik.getFieldProps('password')}
        type='password'
        error={formik.touched.password && formik.errors.password && formik.errors.password}
      />

        <SuperCheckbox
          checked={formik.values.rememberMe}
          {...formik.getFieldProps('rememberMe')}
        >Remember me</SuperCheckbox>
      <SuperButton title='Login' type='submit'/>
    </Form>
  )
}

const Form = styled.form`
  h1 {
    font-size: 40px;
    padding: 20px;
  }
  height: 100%;
  margin: auto;
  min-width: 250px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`



