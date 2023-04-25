import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'
import { Button } from './components/button'
import { ContainerInfo } from './components/containerInfo'
import { Form } from './components/form'
import { InputContainerArea, InputContainerQuantidade } from './components/inputContainer'
import { Wrapper } from './components/wrapper'
import { WrapperContainer } from './components/wrapperContainer'
import { fetchData } from './service/api'
import { transformPayload } from './utils/transformPayload'

function App() {
  const [pinturaData, setPinturaData] = useState()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const payload = transformPayload(data);
    await fetchData(payload, setPinturaData, 'http://localhost:3000/calculaQuantidadeTinta')
  }

  return (
    <Wrapper>
      <ContainerInfo data={pinturaData} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <WrapperContainer>
          <InputContainerArea
            title={'Altura'}
            label={'alturaParede1'}
            register={register}
            required={true}
            errors={errors.alturaParede1}
          />

          <InputContainerArea
            title={'Largura'}
            label={'larguraParede1'}
            register={register}
            required={true}
            errors={errors.larguraParede1}
          />

          <InputContainerQuantidade
            title={'Quantidade de Janelas'}
            label={'quantidadeJanelasParede1'}
            register={register}
            min={'0'}
            errors={errors.quantidadeJanelasParede1}
          />

          <InputContainerQuantidade
            title={'Quantidade de Portas'}
            label={'quantidadePortasParede1'}
            register={register}
            min={'0'}
            errors={errors.quantidadePortasParede1}
          />
        </WrapperContainer>

        <WrapperContainer>
          <InputContainerArea
            title={'Altura'}
            label={'alturaParede2'}
            register={register}
            required={true}
            errors={errors.alturaParede2}
          />

          <InputContainerArea
            title={'Largura'}
            label={'larguraParede2'}
            register={register}
            required={true}
            errors={errors.larguraParede2}
          />

          <InputContainerQuantidade
            title={'Quantidade de Janelas'}
            label={'quantidadeJanelasParede2'}
            register={register}
            min={'0'}
            errors={errors.quantidadeJanelasParede2}
          />

          <InputContainerQuantidade
            title={'Quantidade de Portas'}
            label={'quantidadePortasParede2'}
            register={register}
            min={'0'}
            errors={errors.quantidadePortasParede2}
          />
        </WrapperContainer>

        <WrapperContainer>
          <InputContainerArea
            title={'Altura'}
            label={'alturaParede3'}
            register={register}
            required={true}
            errors={errors.alturaParede3}
          />

          <InputContainerArea
            title={'Largura'}
            label={'larguraParede3'}
            register={register}
            required={true}
            errors={errors.larguraParede3}
          />

          <InputContainerQuantidade
            title={'Quantidade de Janelas'}
            label={'quantidadeJanelasParede3'}
            register={register}
            min={'0'}
            errors={errors.quantidadeJanelasParede3}
          />

          <InputContainerQuantidade
            title={'Quantidade de Portas'}
            label={'quantidadePortasParede3'}
            register={register}
            min={'0'}
            errors={errors.quantidadePortasParede3}
          />
        </WrapperContainer>

        <WrapperContainer>
          <InputContainerArea
            title={'Altura'}
            label={'alturaParede4'}
            register={register}
            required={true}
            errors={errors.alturaParede4}
          />

          <InputContainerArea
            title={'Largura'}
            label={'larguraParede4'}
            register={register}
            required={true}
            errors={errors.larguraParede4}
          />

          <InputContainerQuantidade
            title={'Quantidade de Janelas'}
            label={'quantidadeJanelasParede4'}
            register={register}
            min={'0'}
            errors={errors.quantidadeJanelasParede4}
          />

          <InputContainerQuantidade
            title={'Quantidade de Portas'}
            label={'quantidadePortasParede4'}
            register={register}
            min={'0'}
            errors={errors.quantidadePortasParede4}
          />
        </WrapperContainer>

        <Button type="submit">
          Calcular
        </Button>
      </Form>
    </Wrapper>
  )
}

export default App
