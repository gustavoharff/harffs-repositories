import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #191622;
  color: rgb(151, 151, 151);

  img {
    width: 400px;
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  li {
    width: 250px;
    padding: 15px;
    background: #979797;
    border-radius: 8px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${darken(0.3, '#979797')};
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Back = styled.a`
  width: 250px;
  height: 50px;
  background: #2ebc4f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.3, '#2ebc4f')};
  }
`;
