/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Textarea } from '@rocketseat/unform';

import { Container } from './styles';

export default function Popup({ question, removeFunc }) {
  function handleRemove() {
    removeFunc('');
  }

  return (
    <Container>
      <div>
        <button type="button" onClick={handleRemove}>
          &times;
        </button>
        <Form onSubmit="">
          <span>Student&apos;s question</span>
          <p>{question}</p>
          <label htmlFor="anwser">Your answer</label>
          <Textarea name="awnser" type="text" />
          <button type="submit">Send anwser</button>
        </Form>
      </div>
    </Container>
  );
}

Popup.propTypes = {
  question: PropTypes.string.isRequired,
  removeFunc: PropTypes.func.isRequired,
};
