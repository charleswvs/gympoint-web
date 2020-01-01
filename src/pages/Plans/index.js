import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Title, Table } from '~/styles/table';
// import { Container } from './styles';

export default function Plans() {
  return (
    <Container>
      <div>
        <Title>
          <span>Student list</span>
          <div>
            <button type="button">Insert new</button>
          </div>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Price per Month</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start</td>
              <td>1 month</td>
              <td>US$50.90</td>
              <td className="btn__action">
                <Link to="/" className="btn__action--edit">
                  Edit
                </Link>
              </td>
              <td className="btn__action">
                {' '}
                <Link to="/" className="btn__action--delete">
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Start</td>
              <td>1 month</td>
              <td>US$50.90</td>
              <td className="btn__action">
                <Link to="/" className="btn__action--edit">
                  Edit
                </Link>
              </td>
              <td className="btn__action">
                {' '}
                <Link to="/" className="btn__action--delete">
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Start</td>
              <td>1 month</td>
              <td>US$50.90</td>
              <td className="btn__action">
                <Link to="/" className="btn__action--edit">
                  Edit
                </Link>
              </td>
              <td className="btn__action">
                {' '}
                <Link to="/" className="btn__action--delete">
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
