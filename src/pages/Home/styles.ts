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

  img {
    width: 400px;
  }
`;

export const Title = styled.a`
  margin-top: 100px;
  font-size: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.3);
  }
`;
