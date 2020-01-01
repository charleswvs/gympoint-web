import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  width: 50%;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-size: 24px;
    font-weight: bold;
  }

  button {
    background: #ee4d64;
    border: 0;
    padding: 10px 10px;
    border-radius: 5px;
    margin-right: 6px;
    color: #fff;

    &.btn-back {
      background: #666;
    }
  }
`;
export const Wrapper = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  form {
    > div {
      display: flex;
      flex-direction: column;

      label {
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      input {
        border: 1px solid #eee;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;

        &:hover {
          border-color: rgba(34, 36, 38, 0.35);
        }
      }

      > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        > div {
          display: flex;
          flex: 1;
          flex-direction: column;
          overflow: hidden;

          &.visible {
            overflow: visible;
          }

          & + div {
            margin-left: 20px;
          }

          label {
            display: block;
          }

          input {
            min-width: 100%;
            margin-right: 5px;
            border: 1px solid #eee;
          }
        }
      }
    }
  }
`;
