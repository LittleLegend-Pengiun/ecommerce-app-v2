
import styled, { ThemeProvider } from "styled-components";
import { Form, Input, Button, Typography } from "antd";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ImageSection = styled.div`
margin-top: 80px;
margin-bottom: 140px;
margin-left: 0px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background: white;
`;

export const StyledInput = styled(Input)`
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  padding: 10px;
  font-size: 16px;
  &:focus, &:hover {
    border-bottom: 2px solid #000;
    box-shadow: none;
  }
`;

export const StyledPasswordInput = styled(Input.Password)`
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  padding: 10px;
  font-size: 16px;
  &:focus, &:hover {
    border-bottom: 2px solid #000;
    box-shadow: none;
  }
`;

export const StyledButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.theme.colors.button1};
  border: none;
  width: 143px;
  height: 45px;
  font-size: 16px;
  &:hover, &:focus {
    background-color: darkred;
  }
`;