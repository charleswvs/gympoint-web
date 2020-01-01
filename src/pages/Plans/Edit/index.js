import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import FormWrapper from '~/components/FormWrapper';

export default function EditPlan() {
  return (
    <FormWrapper title="Edit plan">
      <Form>
        <div>
          <label htmlFor="title">Plan title</label>
          <Input name="title" type="text" />
        </div>
        <div>
          <div>
            <div className="visible">
              <label htmlFor="duration">Duration (months)</label>
              <Input name="duration" type="text" />
            </div>
            <div>
              <label htmlFor="price">Monthly price</label>
              <Input name="price" type="text" />
            </div>
            <div>
              <label htmlFor="final_price">Total Price</label>
              <Input name="final_price" type="text" disabled />
            </div>
          </div>
        </div>
      </Form>
    </FormWrapper>
  );
}
