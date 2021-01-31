import React, { useRef } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../Components/Input';
import Toolbar from '../../Components/Toolbar';
import Tooltip from '../../Components/SimpleTooltip';

import { Container } from './styles';
import { 
  Column, 
  ToolbarButton, 
  ToolbarButtonWarning,
  Row,
  RowGrid,
} from '../../styles/global';

function MainPage() {
  const formRef = useRef(null);

  const limpaFormulário = () => {
    formRef.current.setData({
      nome: '',
      email: '',
      login: '',
      senha: '',
      confirmar_senha: '',
    });
  }

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const schemaCad = Yup.object().shape({
        nome: Yup.string().required('Campo Obrigatório'),
        email: Yup.string()
          .required('Campo Obrigatório')
          .email('Informe um e-mail válido'),
        login: Yup.string().required('Campo Obrigatório'),
        senha: Yup.string().required('Campo Obrigatório'),
        confirmar_senha: Yup.string().required('Campo Obrigatório'),        
      });

      await schemaCad.validate(formData, {
        abortEarly: false,
      });

      if (formData.confirmar_senha !== formData.senha) {
        formRef.current.setFieldError('confirmar_senha', 'Valor Inválido')
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <Toolbar>
        <Column wd="20">
          <Tooltip content="Confirmar Cadastro" direction="right">
            <ToolbarButton 
              type="button"
              onClick={() => formRef.current.submitForm()}
            >
              <FaSave />
            </ToolbarButton>
          </Tooltip>
        </Column>
        <Column wd="60" direction="column" justify="center">
          <h3>EXEMPLO DE FORMULÁRIO</h3>
        </Column>
        <Column wd="20" justify="flex-end">
          <Tooltip content="Limpar o formulário" direction="left">
            <ToolbarButtonWarning 
              type="button"
              onClick={limpaFormulário}
            >
              <FaTimes />
            </ToolbarButtonWarning>
          </Tooltip>
        </Column>
      </Toolbar>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <RowGrid pdtop="16">
          <Input type="text" name="nome" label="Nome Completo" />
          <Input type="email" name="email" label="E-mail" />
          <Input type="text" name="login" label="Login" />
          <Input type="password" name="senha" label="Senha" />
          <Input type="password" name="confirmar_senha" label="Repita a Senha" />
        </RowGrid>
      </Form>
      
    </Container>
  );
}

export default MainPage;