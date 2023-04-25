import styled from "styled-components";

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px; 
  margin-top: ${(props) => props.marginTop ? props.marginTop : '0.5rem'}; 
  margin-bottom: ${(props) => props.marginBottom};
  padding: 1px;
`
