/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required("Email can't be empty"),
  password: Yup.string().required("Password can't be empty"),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gympoint-logo" />
      <Form schema={schema}>
        <div>
          <label htmlFor="email">Email</label>
          <Input name="email" type="email" placeholder="Type your email here" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="Type your password here"
          />
        </div>
        <button type="submit">Login</button>
      </Form>
    </>
  );
}
