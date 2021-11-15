describe('simple use', () => {
    const baseURL = 'http://localhost:4200'

    const clientData = [{
        name: 'Erick Storck',
        cpf: '01234567890',
        cellphone: '51999868750',
        birthdate: '26091993',
        address: 'client address',
        vehicle: 'Acura Integra GS 1.8'
    }]

    const crudFiller = (mainElement, errorElement, text, test, error, mask) => {
        cy.get(`#${mainElement}`).type('{selectall}')
        cy.get(`#${mainElement}`).type('{backspace}')
        cy.get(`#${mainElement}`).type(`${test}`)
        cy.get(`#${errorElement}`).should('have.text', `${error}`)
        cy.get(`#${mainElement}`).type('{selectall}')
        cy.get(`#${mainElement}`).type('{backspace}')
        cy.get(`#${mainElement}`).type(`${text}`)
        cy.get(`#${mainElement}`).should('have.value', mask)
    }

    it('new-user', () => {
        cy.visit(baseURL + '/')
        cy.get('#ClientCrud').click()
        cy.get('#form').should('be.visible')
        cy.get('#send').should('be.disabled')
        cy.get('#name').type('Erick Storck')
        cy.get('#send').should('be.disabled')
        crudFiller('cpf', 'cpf-error-1', '01234567890', 'test', 'CPF is required', '012.345.678-90')
        cy.get('#send').should('be.disabled')
        crudFiller('cpf', 'cpf-error-2', '01234567890', '01234567891', 'Please enter a valid CPF ', '012.345.678-90')
        cy.get('#send').should('be.disabled')
        cy.get('#cpf-valid').should('have.text', 'CPF is valid')
        crudFiller('cellphone', 'cellphone-error', '51999868750', 'test', 'Cellphone number is required', '(51) 99986-8750')
        cy.get('#send').should('be.disabled')
        crudFiller('birthdate', 'birthdate-error', '26091993', 'test', 'Birthdate is required', '26/09/1993')
        cy.get('#send').should('be.disabled')
        cy.get('#address').type('client address')
        cy.get('#send').should('be.disabled')
        cy.get('#vehicle').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        cy.wait(1000)
        cy.get('#mat-menu-panel-1 > .mat-menu-content > :nth-child(1)').click()
        cy.get('#vehicle').should('have.text', 'Acura Integra GS 1.8')
        cy.get('#send').should('be.enabled')
        cy.get('#send').click()
        cy.wait(1000)
        cy.getLocalStorage('clientList')
            .then($clientList => {
                const clienList = JSON.parse($clientList)
                Object.keys(clientData).forEach(e => {
                    expect(clienList[0][e]).to.equal(clientData[0][e])
                })
            })
    })

    it('check-creation-update-delete', () => {
        cy.visit(baseURL + '/')
        cy.setLocalStorage('clientList', JSON.stringify(clientData))
        cy.get('#clientList').click()
        cy.get(':nth-child(1) > .mat-list-item-content > .mat-list-text').click()
        cy.get('#name').should('have.value', 'Erick Storck').clear().type('update test')
        cy.get('#cpf').should('have.value', '012.345.678-90')
        cy.get('#cellphone').should('have.value', '(51) 99986-8750')
        cy.get('#birthdate').should('have.value', '26/09/1993')
        cy.get('#address').should('have.value', 'client address')
        cy.get('#vehicle').should('have.text', 'Acura Integra GS 1.8')
        cy.get('#send').click()
        cy.get(':nth-child(1) > .mat-list-item-content > .mat-list-text').should('have.text', ' update test ')
        cy.get(':nth-child(1) > .mat-list-item-content > .mat-list-text').click()
        cy.get('#delete').click()
        cy.get('#empty-list').should('have.text', ' Empty ')
    })
})