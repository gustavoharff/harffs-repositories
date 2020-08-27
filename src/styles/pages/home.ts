import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: auto;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 36px;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 250px;
  background: ${props => props.theme.colors.primaryGreen};
  border: 2px solid ${props => props.theme.colors.secondaryGreen};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    background: ${props => props.theme.colors.secondaryGreenHover};
    border-color: ${props => props.theme.colors.primaryGreenHover};
    color: ${darken(0.1, '#fff')};
  }
`;