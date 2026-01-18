class BasePage {
    constructor() {
        this.timeout = { timeout: 20000 };
    }


    /**
        * Método que espera e obtém um elemento
        * Se começa com "//" ou "/", tratamos como XPath, senão como seletor CSS
        * @param {string} selector 
        * @returns {Cypress.Chainable}
        */
     getElement(selector){
        return cy.get(selector, this.timeout).should('exist');
    }

    checkContain(selector, variable) {
        this.getElement(selector).should('contain', variable);
    }


    /**
        * Método que digita em um campo de entrada
        * @param {string} selector 
        * @param {string} text 
        * @returns {Cypress.Chainable}
        */
    type(selector, text) {
        return this.getElement(selector).type(text);
    }

    /**
    * Método que clica em um elemento
    * @param {string} selector 
    * @returns {Cypress.Chainable}
    */
    click(selector) {
        return this.getElement(selector, this.timeout).should('be.visible').click({ force: true });
    }
}

export default BasePage;
