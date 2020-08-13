import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;

  li {
    width: 400px;
    height: 120px;
    background: #383838;
    margin: 20px auto;
    border: 2px solid #717171;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: #D3D3D3;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: 0.2s;

    &:hover {
      background: ${darken(0.2, '#28741A')};
      border-color: ${darken(0.2, '#2CB436')};
    }

    strong {
      margin: 5px 15px;
    }

    p {
      margin: 0px 5px 5px 15px;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 30px;
  color: rgb(211, 211, 211);
  font-weight: normal;
  font-size: 36px;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  width: 250px;
  background: #2CB436;
  border: 2px solid #28741A;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  font-size: 16px;
  margin-bottom: 30px;

  &:hover {
    background: ${darken(0.1, '#28741A')};
    border-color: ${darken(0.2, '#2CB436')};
    color: ${darken(0.1, '#fff')};
  }
`;