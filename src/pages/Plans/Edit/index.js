/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';

import FormWrapper from '~/components/FormWrapper';
import {
  loadPlansRequest,
  savePlanRequest,
} from '~/store/modules/plan/actions';

export default function EditPlan() {
  const dispatch = useDispatch();
  const planId = useParams().id;
  const plans = useSelector(state => state.plan.plans);
  const plan = plans.find(p => p.id === Number(planId));

  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);

  // setTotalPrice(plan.price * plan.duration);

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []);

  useEffect(() => {
    if (price && duration) setTotalPrice(price * duration);
    else if (price) setTotalPrice(price * plan.duration);
    else if (duration) setTotalPrice(duration * plan.price);
    console.tron.log(totalPrice);
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
    <FormWrapper submitFunc={handleSubmit} initialData={plan} title="Edit plan">
      <Input name="id" type="hidden" />
      <div>
        <label htmlFor="title">Plan title</label>
        <Input name="title" type="text" />
      </div>
      <div>
        <div>
          <div className="visible">
            <label htmlFor="duration">Duration (months)</label>
            <Input name="duration" type="number" onChange={handleDuration} />
          </div>
          <div>
            <label htmlFor="price">Monthly price</label>
            <Input name="price" type="number" onChange={handlePrice} />
          </div>
          <div>
            <label htmlFor="final_price">Total Price</label>
            {totalPrice ? (
              <Input
                name="final_price"
                value={totalPrice}
                type="text"
                disabled
              />
            ) : (
              <Input name="final_price" type="text" disabled />
            )}
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}
