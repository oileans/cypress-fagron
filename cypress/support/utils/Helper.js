import { faker } from '@faker-js/faker';

class Helper {

    static gerarDadosBasicos() {
        return {
            nomeCompleto: faker.person.fullName(),
            email: faker.internet.email(),
        };
    }
}

export default Helper;