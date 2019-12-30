import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  padding: 30px 0px;
  height: 100%;
  overflow: visible;

  > div {
    max-width: 80%;
    margin: 0 auto;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: row;

    button {
      background: #ee4d64;
      border: 0;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 6px;
      color: #fff;
    }

    input {
      border-radius: 5px;
      border: 1px solid #ddd;
      padding: 10px 10px;
    }
  }
`;
export const Table = styled.table`
  margin-top: 20px;
  background: #fff;
  width: 100%;
  border-radius: 5px;
  padding: 20px 15px;

  .btn__action {
    text-align: center;
    max-width: 24px;

    &--edit {
      color: #4d85ee;
    }
    &--delete {
      color: #de3b3b;
    }
  }
  thead {
    font-size: 18px;
    text-align: left;
  }

  tbody td {
    text-align: left;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
`;
