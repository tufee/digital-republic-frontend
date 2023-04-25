import styled from "styled-components";
import img from '../assets/lata.png';
import { ErrorMessage } from "./errorMessage";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  white-space: nowrap;
`
export const Img = styled.img`
  width: 200px;
  height = 200px;
  margin-bottom: 2rem;
`

export const Span = styled.span`
  color: #000;
  font-size: 14;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding: 1px
`

export const ContainerInfo = (props) => {
  return (
    <Wrapper>
      <Img src={img} alt="lata" />

      {props.data?.message ?
        <ErrorMessage marginTop='1rem' marginBottom='1rem'>{props.data.message}</ErrorMessage>
        : ''
      }

      <Span>Área total: {props.data?.area ?
        props.data.area.toFixed(2)
        : ''
      }
      </Span>

      <Span>Litros de tinta necessários: {props.data ?
        props.data.litrosNecessarios?.toFixed(2)
        : ''
      }
      </Span>

      {props.data?.latasNecessarias ?
        props.data.latasNecessarias.map((item, index) => {
          if (item.quantidade > 0) {
            return (
              <Span
                key={index}>Tamanho da lata: {item.tamanho}L, Quantidade de latas necessárias: {item.quantidade}
              </Span>
            )
          }
        }
        ) : ''
      }
    </Wrapper>
  )
}
