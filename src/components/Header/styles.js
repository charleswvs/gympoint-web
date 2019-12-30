import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 10px 5px;
`;

export const Content = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    border-right: 1px solid #ddd;
    margin-right: 10px;
    padding-right: 10px;
  }
  nav {
    display: flex;
    align-items: center;
  }
  aside {
    text-align: right;
    color: #444;
    button {
      background: transparent;
      border: 0;
      color: #ee4d64;
      font-size: 12px;
      text-transform: uppercase;
      transition: 0.2s font-weight;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;

export const Linked = styled(Link)`
  ${props =>
    props.active ? 'font-weight:bold; color: #0f0f0f;' : 'color: #444;'};

  margin-right: 12px;
  text-decoration: none;
  font-size: 13px;
  transition: 0.2s color;
  transition: 0.2s border-bottom;

  &:hover {
    border-bottom: 3px solid #ee4d64;
    color: #ee4d64;
  }
`;
