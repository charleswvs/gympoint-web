import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Table } from './styles';

export default function Students() {
  // TODO make a global component for this table
  return (
    <Container>
      <div>
        <Title>
          <span>Student list</span>
          <div>
            <button type="button">Insert new</button>
            <input name="search" type="text" placeholder="search student" />
          </div>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Age</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluno 1</td>
              <td>aluno@email.com</td>
              <td>27</td>
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
              <td>Aluno 1</td>
              <td>aluno@email.com</td>
              <td>27</td>
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
              <td>Aluno 1</td>
              <td>aluno@email.com</td>
              <td>27</td>
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
