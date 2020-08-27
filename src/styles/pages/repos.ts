import styled from 'styled-components'
import { darken } from 'polished'

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
`

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
    color: ${props => props.theme.colors.text};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: 0.2s;

    &:hover {
      background: ${props => props.theme.colors.secondaryGreenHover};
      border-color: ${props => props.theme.colors.primaryGreenHover};
    }

    strong {
      margin: 5px 15px;
    }

    p {
      margin: 0px 5px 5px 15px;
    }
  }
`

export const Title = styled.h1`
  margin-top: 30px;
  font-weight: normal;
  font-size: 36px;
`

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  min-height: 60px;
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
  margin-bottom: 30px;

  &:hover {
    background: ${props => props.theme.colors.secondaryGreenHover};
    border-color: ${props => props.theme.colors.primaryGreenHover};
    color: ${darken(0.1, '#fff')};
  }
`
