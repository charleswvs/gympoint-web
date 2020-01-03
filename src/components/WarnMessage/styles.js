import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
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

  > div{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    padding: 30px;
    max-width: 500px;

    span{
      font-size: 18px;
      text-align: center;
      margin: 8px 0;
    }

    div{
      display: flex;
      justify-content: flex-start;
      .btn {
        border: 0;
        color: #fff;
        border-radius: 5px;
        padding: 10px;

        &--confirm{
          margin-left: 10px;
          background: #ee4d64;
        }

        &--cancel{
          background: #999;
        }
      }
    }
  }
`;
