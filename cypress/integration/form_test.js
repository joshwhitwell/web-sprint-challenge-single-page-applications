//Form test
describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //Element selectors
   const getTextBox = () => {
       return cy.get('#special-instructions')
   }

   const getOrderLink = () => {
       return cy.get('[href="/pizza"]')
   }

   const getPepperoni = () => {
       return cy.get('#pepperoni-input')
   }

    const getSausage = () => {
        return cy.get('#sausage-input')
    }

    const getPeppers = () => {
        return cy.get('#peppers-input')
    }

    const getOnions = () => {
        return cy.get('#onions-input')
    }
    
    const getSubmit = () => {
        return cy.get('#submit-button')
    }

   //Input field test
    it('can type in input box', () => {
        getOrderLink()
            .click()
        getTextBox()
            .should('have.value', '')//starts empty
            .type('testing 1 2 3')
            .should('have.value', 'testing 1 2 3')
            .clear()
    })

   //Checxkbox field test
   it('can select multiple toppings', () => {
        getOrderLink()
            .click()
        getPepperoni()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        getSausage()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        getPeppers()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        getOnions()
            .should('not.be.checked')
            .check()
            .should('be.checked')
   })

   //Submit button test
    it('can submit form', () => {
        getOrderLink()
            .click()
        getSubmit()
            .should('be.disabled')
        cy.get('#name-input')
            .type('test')
        getSubmit()
            .should('be.disabled')
        cy.get('select')
            .select('Small')
        getSubmit()
            .should('be.disabled')
        cy.get('#bbq-select')
            .click()
        getSubmit()
            .should('not.be.disabled')
        getPeppers()
            .check()
        getSubmit()
            .should('not.be.disabled')
        cy.get('#special-instructions')
            .type('none')
        getSubmit()
            .should('not.be.disabled')
            .click()
        getSubmit()
            .should('be.disabled')
    })
})