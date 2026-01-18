import CadastroPage from '../pages/modules/CadastroPage';

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
    CadastroPage
      .tentarLoginComUsuarioInvalido();
  });
});
