/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';
import FormWrapper from '~/components/FormWrapper';
import { savePlanRequest } from '~/store/modules/plan/actions';

export default function AddPlan() {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    if (price && duration) {
      setTotalPrice(price * duration);
    }
  }, [price, duration]);

  function handleSubmit(data) {
    dispatch(savePlanRequest(data));
  }

  function handleDuration(event) {
    setDuration(event.target.value);
  }
  function handlePrice(event) {
    setPrice(event.target.value);
  }
  return (
    <FormWrapper title="Add new" submitFunc={handleSubmit}>
      <div>
        <label htmlFor="title">Plan title</label>
        <Input name="title" type="text" />
      </div>
      <div>
        <div>
          <div>
            <label htmlFor="duration">Duration (months)</label>
            <Input name="duration" type="number" onChange={handleDuration} />
          </div>
          <div>
            <label htmlFor="price">Monthly price</label>
            <Input name="price" type="text" onChange={handlePrice} />
          </div>
          <div>
            <label htmlFor="final_price">Total Price</label>
            <Input name="final_price" type="text" disabled value={totalPrice} />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}
