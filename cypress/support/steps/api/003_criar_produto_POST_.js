export class CriarProduto {
    criarProduto(dados) {
        return cy.request({
            method: 'POST',
            failOnStatusCode: false, 
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                name: dados.name, 
                brand: dados.brand,  
                price: dados.price
                
            }
        }).then((res) => {
            if (res.status === 400) {
                cy.log("Erro 400: Verifique os dados enviados.");
                cy.log("Resposta:", res.body);
            }
            return res;
        });
    }
}
