import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';

import { Container } from './styles';

export default function Popup() {
  return (
    <Container>
      <div>
        <Form onClick="">
          <label>Student&apos;s question</label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            minus corporis soluta facere tenetur reiciendis voluptatibus at
            dolores quidem nisi, suscipit et. Accusantium, facilis earum.
            Inventore in odio natus saepe!
          </p>
          <label htmlFor="anwser">Your answer</label>
          <Textarea name="awnser" type="text" />
          <button type="submit">Send anwser</button>
        </Form>
      </div>
    </Container>
  );
}
