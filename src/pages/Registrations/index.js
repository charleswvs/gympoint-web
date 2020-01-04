/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdDone, MdClear } from 'react-icons/md';

import { Container, Title, Table } from '~/styles/table';
import { loadRegistrationsRequest } from '~/store/modules/registration/actions';
// import { Container } from './styles';

export default function Registrations() {
  const dispatch = useDispatch();
  const registrations = useSelector(state => state.registration.registrations);

  useEffect(() => {
    dispatch(loadRegistrationsRequest());
  }, []);

  return (
    <Container>
      <div>
        <Title>
          <span>Registrations</span>
          <div>
            <Link to="/registrations/add">Insert new</Link>
          </div>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Plan</th>
              <th>Start</th>
              <th>End</th>
              <th>Active</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.start_date}</td>
                <td>{registration.end_date}</td>
                <td>{registration.active ? <MdClear /> : <MdDone />}</td>
                <td className="btn__action">
                  <Link
                    to={`registrations/${registration.id}/edit`}
                    className="btn__action--edit"
                  >
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
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
