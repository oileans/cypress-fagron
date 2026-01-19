import BasePage from "../base/basePage";

class LoginPage extends BasePage {
    constructor() {
        super();
        this.testData = {}

        this.selectors = {
            login: {
                emailLogin: '[data-testid="email"]',
                senhaLogin: '[data-testid="senha"]',
                btnEntrar: '[data-testid="entrar"]'
            }
        };
    }

    tentarLoginComUsuarioInvalido() {
        const emailInvalido = 'invalido@teste.com';
        const senhaInvalida = '123456';

        cy.log('Tentando login com usuário inválido');
        cy.log(`Email: ${emailInvalido}`);
        cy.log(`Senha: ${senhaInvalida}`);

        console.log('Tentativa de login inválido:', { emailInvalido, senhaInvalida });

        this.type(this.selectors.login.emailLogin, emailInvalido);
        this.type(this.selectors.login.senhaLogin, senhaInvalida);
        this.click(this.selectors.login.btnEntrar);

        cy.contains('Email e/ou senha inválidos').should('be.visible');

        return this;
    }

    loginValido() {
        const emailValido = 'fagron@test.com.br';
        const senhaValida = '123456';

        cy.log('Tentando login com usuário válido');
        cy.log(`Email: ${emailValido}`);
        cy.log(`Senha: ${senhaValida}`);

        console.log('Tentativa de login valido:', { emailValido, senhaValida });

        this.type(this.selectors.login.emailLogin, emailValido);
        this.type(this.selectors.login.senhaLogin, senhaValida);
        this.click(this.selectors.login.btnEntrar);

        cy.contains('Bem Vindo Fagron Teste').should('be.visible');

        return this;
    }
}

export default new LoginPage();