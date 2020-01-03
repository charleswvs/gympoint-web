/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, Table } from '~/styles/table';
import {
  loadPlansRequest,
  deletePlanRequest,
} from '~/store/modules/plan/actions';
import WarnMessage from '~/components/WarnMessage';

export default function Plans() {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState();
  const plans = useSelector(state => state.plan.plans);

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []);

  function handleDelete(id) {
    setPopup(
      <WarnMessage
        confirmFunc={() => dispatch(deletePlanRequest(id))}
        state={setPopup}
      />
    );
  }

  return (
    <>
      {popup}
      <Container>
        <div>
          <Title>
            <span>Student list</span>
            <div>
              <Link to="/plans/add">Insert new</Link>
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
              {plans.map(plan => (
                <tr key={plan.id}>
                  <td>{plan.title}</td>
                  <td>{plan.duration}</td>
                  <td>{plan.price}</td>
                  <td className="btn__action">
                    <Link
                      to={`/plans/${plan.id}/edit`}
                      className="btn__action--edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="btn__action">
                    {' '}
                    <button
                      type="button"
                      className="btn__action--delete"
                      onClick={() => handleDelete(plan.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
