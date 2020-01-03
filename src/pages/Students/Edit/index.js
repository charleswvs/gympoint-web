/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import FormWrapper from '~/components/FormWrapper';
import {
  loadStudentsRequest,
  saveStudentRequest,
} from '~/store/modules/student/actions';

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

export default function EditStudent() {
  const dispatch = useDispatch();

  const studentId = useParams().id;
  const student = useSelector(state =>
    state.student.students.find(s => s.id === Number(studentId))
  );

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []);

  function handleSubmit(data) {
    dispatch(saveStudentRequest(data));
  }

  return (
    <FormWrapper
      initialData={student}
      title="Edit student"
      submitFunc={handleSubmit}
      schema={schema}
    >
      <div>
        <Input type="hidden" name="id" />
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
