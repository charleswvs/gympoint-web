/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import FormWrapper from '~/components/FormWrapper';
import { saveStudentRequest } from '~/store/modules/student/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please select a valid email')
    .required('Please fill this field'),
  name: Yup.string('Please insert only text').required(
    'Please fill this field'
  ),
  age: Yup.number('Please insert only numbers').required(
    'Please fill this field'
  ),
  weight: Yup.number('Please insert only numbers').required(
    'Please fill this field'
  ),
  height: Yup.number('Please insert only numbers').required(
    'Please fill this field'
  ),
});

export default function AddStudent() {
  const dispatch = useDispatch();
  async function handleSubmit({ name, email, age, height, weight }) {
    dispatch(saveStudentRequest({ name, email, age, height, weight }));
  }

  return (
    <FormWrapper
      schema={schema}
      title="Add new student"
      submitFunc={handleSubmit}
    >
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
    </FormWrapper>
  );
}
