import { useRef } from 'react';
import logo from './logo.svg';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from './Components/Input';

import './App.css';


function App() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    try {
      formRef.current.setErrors({});

      const schemaCad = Yup.object().shape({
        nome: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().required('Campo Obrigatório'),
        login: Yup.string().required('Campo Obrigatório'),
        senha: Yup.string().required('Campo Obrigatório'),
      });

      await schemaCad.validate(formData, {
        abortEarly: false,
      });
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <section className="App-body">
          <div className="row">
            <div className="col">
              <h3>Formulário de Cadastro</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input type="text" name="nome" label="Nome Completo" />
            </div>
            <div className="col">
              <Input type="email" name="email" label="E-mail" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Input type="text" name="login" label="Login" />
            </div>
            <div className="col">
              <Input type="password" name="senha" label="Senha" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit">Salvar Cadastro</button>
            </div>
          </div>
        </section>
      </Form>
    </div>
  );
}

export default App;
