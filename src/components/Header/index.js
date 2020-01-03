import React from 'react';

import logo from '~/assets/images/logo-row.svg';
import { Container, Content, Linked } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympoint-logo" />
          <Linked to="/students">STUDENTS</Linked>
          <Linked to="/registrations">REGISTRATIONS</Linked>
          <Linked to="/plans">PLANS</Linked>
          <Linked to="/help-orders">HELP ORDERS</Linked>
        </nav>

        <aside>
          <div>
            <p>Admin</p>
            <button type="button">Exit GymPoint</button>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
