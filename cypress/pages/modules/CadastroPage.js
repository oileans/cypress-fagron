import BasePage from "../base/basePage";
import Helper from '../../support/utils/Helper';

class CadastroPage extends BasePage {
    constructor() {
        super();
        this.testData = {}

        this.selectors = {
            cadastro: {
                lnkCadastrar: 'a.btn.btn-link',
                nome: '[data-testid="nome"]',
                email: '[data-testid="email"]',
                senha: '[data-testid="password"]',
                btnCadastrar: '[data-testid="cadastrar"]',
                modalLoginSucesso: '.alert-link',
                emailLogin: '[data-testid="email"]',
                senhaLogin: '[data-testid="senha"]',
                btnEntrar: '[data-testid="entrar"]'
            }
        };
    }

    iniciarNovoCadastro() {
        this.click(this.selectors.cadastro.lnkCadastrar)
        return this;
    }

    preencherNovoCadastro() {
        this.testData = Helper.gerarDadosBasicos();
        this.type(this.selectors.cadastro.nome, this.testData.nomeCompleto)
        this.type(this.selectors.cadastro.email, this.testData.email)
        this.type(this.selectors.cadastro.senha, '12345')

        // Log 
        cy.log(`Nome: ${this.testData.nomeCompleto}`);
        cy.log(`Email: ${this.testData.email}`);
        cy.log(`Senha: 12345`);
        return this;
    }

    submeterCadastro() {
        const mensagem = 'Cadastro realizado com sucesso'

        this.click(this.selectors.cadastro.btnCadastrar);
        this.checkContain(this.selectors.cadastro.modalLoginSucesso, mensagem);
        return this;
    }

}

export default new CadastroPage();