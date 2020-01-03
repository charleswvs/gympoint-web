import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Title, Table } from '~/styles/table';
import {
  loadStudentsRequest,
  deleteStudentRequest,
} from '~/store/modules/student/actions';
import WarnMessage from '~/components/WarnMessage';

export default function Students() {
  const students = useSelector(state => state.student.students);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState('');

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []);

  function handleDelete(id) {
    setPopup(
      <WarnMessage
        confirmFunc={dispatch(deleteStudentRequest(id))}
        state={setPopup}
      />
    );
  }

  // TODO make a global component for this table
  return (
    <>
      {popup}
      <Container>
        <div>
          <Title>
            <span>Student list</span>
            <div>
              <Link to="/students/add">Insert new</Link>
              <input
                name="search"
                type="text"
                placeholder="search student"
                onChange=""
              />
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
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td className="btn__action">
                    <Link
                      to={`/students/${student.id}/edit`}
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
                      onClick={() => handleDelete(student.id)}
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
