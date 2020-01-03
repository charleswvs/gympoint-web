import React from 'react';
import PropTypes from 'prop-types';
import { MdWarning } from 'react-icons/md';

import { Container } from './styles';

export default function WarnMessage({ state, confirmFunc }) {
  function handleRemove() {
    state('');
  }

  function handleConfirm() {
    confirmFunc();
    handleRemove();
  }

  return (
    <Container>
      <div>
        <MdWarning color="#ee4d64" size={75} />
        <span>This action cannot be undone! Do you want to proceed?</span>
        <div>
          <button
            type="button"
            className="btn btn--cancel"
            onClick={handleRemove}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn--confirm"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </Container>
  );
}

WarnMessage.propTypes = {
  state: PropTypes.func.isRequired,
  confirmFunc: PropTypes.func.isRequired,
};
