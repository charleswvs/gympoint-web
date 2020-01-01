/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import FormWrapper from '~/components/FormWrapper';

// import { Container } from './styles';

export default function EditStudent() {
  return (
    <FormWrapper title="Add new student">
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input name="email" type="text" />
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="age">Age</label>
              <Input name="age" type="text" />
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <Input name="weight" type="text" />
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <Input name="height" type="text" />
            </div>
          </div>
        </div>
      </Form>
    </FormWrapper>
  );
}
