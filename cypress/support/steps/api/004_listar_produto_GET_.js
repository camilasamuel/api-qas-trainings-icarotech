// Dentro de ../../support/steps/api/004_listar_produto_GET_.js
export class ListarProduto {
    listarProduto(dados, assert) {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }
        }).as('response');

        cy.get('@response').then((res) => {
            console.log(res.body);
            expect(res.status).to.eq(200);

            // Buscando o produto pela comparação do nome
            const produtoEncontrado = res.body.find(p => p.name === assert.name);
            expect(produtoEncontrado, `Produto ${assert.name} não encontrado`).to.exist;
            expect(produtoEncontrado).to.have.property('id', assert.id);
            expect(produtoEncontrado).to.have.property('price', assert.price);
        });
    }
}
