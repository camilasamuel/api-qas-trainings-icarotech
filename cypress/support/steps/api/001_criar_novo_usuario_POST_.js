export class CriarUsuario {

    criarUsuario(dados, assert) {

        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }, body: {
                id: 97,
                name: dados.name,
                last_name: dados.last_name,
                email: dados.email
            },

        }).as('response')

        cy.get('@response').then((res) => {

            console.log(res.body)
            expect(res.status).to.eq(assert.status)
            expect(res.body).to.have.property('email', assert.email)
            expect(res.body).to.have.property('id', assert.id)
            expect(res.body).to.have.property('name', assert.name)
            expect(res.body).to.have.property('last_name', assert.last_name)

        })
    }
}