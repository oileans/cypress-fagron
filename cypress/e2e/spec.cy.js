import CadastroPage from '../pages/modules/CadastroPage';
import LoginPage from '../pages/modules/LoginPage';

describe('Acessar Site', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/');
  });

  it('Deve cadastrar um novo usuario com sucesso', () => {
    CadastroPage
      .iniciarNovoCadastro()
      .preencherNovoCadastro()
      .submeterCadastro();
  });


  it('Login inválido', () => {
    LoginPage
      .tentarLoginComUsuarioInvalido();
  });

  it('Login com sucesso', () => {
    LoginPage
      .loginValido();
  });
});
