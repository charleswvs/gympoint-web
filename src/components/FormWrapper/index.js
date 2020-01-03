import React from 'react';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import history from '~/services/history';
import { Container, Title, Wrapper } from './styles';

export default function FormWrapper({
  children,
  title,
  submitFunc,
  schema,
  initialData,
}) {
  return (
    <Container>
      <Form initialData={initialData} schema={schema} onSubmit={submitFunc}>
        <Title>
          <span>{title}</span>

          <div>
            <button onClick={history.goBack} type="button" className="btn-back">
              Go back
            </button>
            <button type="submit">Confirm</button>
          </div>
        </Title>
        <Wrapper>{children}</Wrapper>
      </Form>
    </Container>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  submitFunc: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  initialData: PropTypes.object,
};

FormWrapper.defaultProps = {
  initialData: null,
};
