import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  /* visibility: ${props => (props.visible ? 'visible' : 'hidden')}; */

  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-items: center;

  > div {
    background: #fff;
    z-index: 101;
    border-radius: 5px;
    margin: auto;
    min-width: 480px;
    max-width: 540px;
    padding: 20px;
    position: relative;

    > button {
      position: absolute;
      top: 0;
      right: 5px;
      display: inline-block;
      background: transparent;
      border: 0;
      color: #000;
      font-weight: bold;
      font-size: 24px;
    }

    form {
      display: flex;
      flex-direction: column;

      span,
      label {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 5px;
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }

      textarea {
        border: 1px solid #ddd;
        min-height: 100px;
        border-radius: 5px;
        margin-top: 5px;
      }

      button {
        background: #ee4d64;
        border: 0;
        color: #fff;
        border-radius: 5px;
        padding: 10px 0%;
        margin-top: 7px;
      }
    }
  }
`;
