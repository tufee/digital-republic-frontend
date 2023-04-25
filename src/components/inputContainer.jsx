import styled from "styled-components";
import { ErrorMessage } from "./errorMessage";

export const Container = styled.div`
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
export const Label = styled.label`
  padding: 7px;
  white-space: nowrap;
  color: #000;
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  height: 24px;
  font-size: 14;
  border-radius: 5px;
  box-shadow: -5px 0px 10px 0 rgba(0, 0, 0, 0.3);
  border: none
`
export const InputContainerArea = ({ title, label, register, required, errors }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input text={title} type="number" step="0.01" min="1" max="50"
        {...register(label, { required })} />

      {errors && <ErrorMessage>Campo obrigatório</ErrorMessage>}
    </Container>
  )
}

export const InputContainerQuantidade = ({ title, label, register, min, errors }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Input text={title} type="number" step="1"
        {...register(label, { min })} />

      {errors && <ErrorMessage>Não é permitido valor negativo</ErrorMessage>}
    </Container>
  )
}
