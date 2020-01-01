import React from 'react';
import history from '~/services/history';
import { Container, Title, Wrapper } from './styles';

// import { Container } from './styles';

export default function FormWrapper({ children, title }) {
  // console.tron.log(props);
  return (
    <Container>
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
    </Container>
  );
}
