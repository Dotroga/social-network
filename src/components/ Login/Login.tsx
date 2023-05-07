import React from 'react';
import {useFormik} from "formik";
import {SuperInput} from "../Super/SuperInput/SuperInput";
import {SuperCheckbox} from "../Super/SuperCheckbox/SuperCheckbox";
import styled from "styled-components";
import {SuperButton} from "../Super/SuperButton/SuperButton";

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

type LoginErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      let errors: LoginErrorType = {}
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
      console.log(values)
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
      />
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
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 150px;
  gap: 10px;
`



