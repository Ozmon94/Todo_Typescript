import styled from "styled-components";

interface IButton {
  secondary?: boolean;
}

const Button = styled.button<IButton>`
  margin: 5px 0;
  background-color: ${(props) => (props.secondary ? "rgb(6,99,141)" : "white")};
  padding: 5px 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 15px;
  transition: 0.2s ease;
  cursor: pointer;
  color: ${(props) => (props.secondary ? "white" : "rgb(6,99,141)")};
  &:hover {
    background-color: ${(props) =>
      props.secondary ? "white" : "rgba(255, 255, 255, 0.2)"};
    color: ${(props) => (props.secondary ? "rgb(6,99,141)" : "white")};
    box-shadow: ${(props) =>
      props.secondary ? "0 0 5px rgb(6,99,141)" : "none"};
  }
`;

export default Button;
