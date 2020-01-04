/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import Select from 'react-select';
import { addMonths, format, isDate } from 'date-fns';

import FormWrapper from '~/components/FormWrapper';
import { loadPlansRequest } from '~/store/modules/plan/actions';
import { loadStudentsRequest } from '~/store/modules/student/actions';
import { saveRegistrationRequest } from '~/store/modules/registration/actions';

export default function AddRegistration() {
  const dispatch = useDispatch();
  const [student, setStudent] = useState();
  const [plan, setPlan] = useState();
  const [date, setDate] = useState();
  const [endDate, setEndDate] = useState();
  const [finalPrice, setFinalPrice] = useState();

  const students = useSelector(state =>
    state.student.students.map(s => ({
      value: s.id,
      label: s.name,
    }))
  );
  const plans = useSelector(state =>
    state.plan.plans.map(p => ({
      value: p.id,
      label: p.title,
      duration: p.duration,
      price: p.price,
    }))
  );

  useEffect(() => {
    dispatch(loadPlansRequest());
    dispatch(loadStudentsRequest());
  }, []);

  useEffect(() => {
    if (!isDate(date)) {
      setEndDate(null);
    } else if (date && plan) {
      setEndDate(format(addMonths(date, plan.duration), "MM'/'dd'/'yyyy"));
    }

    if (plan) {
      setFinalPrice(plan.duration * plan.price);
    }
  }, [date, plan]);

  function handleSubmit(value) {
    const data = {
      student_id: student,
      plan_id: plan.id,
      start_date: new Date(value.start_date),
    };
    dispatch(saveRegistrationRequest(data));
  }

  function handlePlanChange(event) {
    setPlan({ id: event.value, duration: event.duration, price: event.price });
  }

  function handleStudentChange(event) {
    setStudent(event.value);
  }

  function handleDateChange(event) {
    setDate(new Date(event.target.value));
  }

  return (
    <>
      <FormWrapper title="Add new" submitFunc={handleSubmit}>
        <div>
          <label htmlFor="name">Student</label>
          <div>
            <div className="visible">
              <Select
                name="student_id"
                onChange={handleStudentChange}
                options={students}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="visible">
              <label htmlFor="plan">Plan</label>
              <Select
                name="plan_id"
                onChange={handlePlanChange}
                options={plans}
              />
            </div>
            <div>
              <label htmlFor="start_date">Start Date</label>
              <Input
                name="start_date"
                type="date"
                onChange={handleDateChange}
              />
            </div>
            <div>
              <label htmlFor="end_date">End date</label>
              <Input name="end_date" type="text" value={endDate} disabled />
            </div>
            <div>
              <label htmlFor="final_price">Final Price</label>
              <Input
                name="final_price"
                type="text"
                value={finalPrice}
                disabled
              />
            </div>
          </div>
        </div>
      </FormWrapper>
    </>
  );
}
