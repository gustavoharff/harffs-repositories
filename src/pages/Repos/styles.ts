import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #191622;
  color: rgb(151, 151, 151);
  font-family: sans-serif;

  img {
    width: 400px;
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  li {
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
`;