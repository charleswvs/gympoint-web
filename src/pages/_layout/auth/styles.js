import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      label {
        text-align: left;
        font-size: 14px;
        text-transform: uppercase;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        border: 1px solid #ddd;
        padding: 9px;
        border-radius: 5px;
      }
    }
    button {
      padding: 9px;
      background: #ee4d64;
      border: 0;
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 5px;
      color: #fff;
      transition: 0.2s background;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
