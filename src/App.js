import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import { Form } from '@unform/web';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <Form>
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
        </section>
      </Form>
    </div>
  );
}

export default App;
