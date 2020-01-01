/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Table } from '~/styles/table';
import Popup from './Popup';
// import { Container } from './styles';

export default function HelpOrders() {
  const [popup, setPopup] = useState([]);

  function renderAnswerPopup(question) {
    setPopup(<Popup question={question} remove={setPopup} />);
  }

  return (
    <>
      {popup}
      <Container>
        <div>
          <Title>
            <span>Help Orders</span>
          </Title>
          <Table>
            <thead>
              <tr>
                <th>Student</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aluno 1</td>
                <td className="btn__action">
                  <button
                    type="button"
                    onClick={() => renderAnswerPopup('tralala')}
                    className="btn__action--edit"
                  >
                    Anwser
                  </button>
                </td>
              </tr>
              <tr>
                <td>Aluno 1</td>
                <td className="btn__action">
                  <Link to="/" className="btn__action--edit">
                    Anwser
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Aluno 1</td>
                <td className="btn__action">
                  <Link to="/" className="btn__action--edit">
                    Anwser
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
