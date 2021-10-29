describe('Cypress', () => {

    it('is working', () => {
        expect(true).to.equal(true)
    })

    // simple test case
    it('opens the app', () => {
        cy.visit('http://localhost:3000')
    })

    it('registration form render properly with three input fields and submit button', () => {
        cy.get('form').should('have.class', 'register-form');
        cy.get('input[id="first-name"]').should('have.attr', 'placeholder', 'First Name');

        cy.get('form').find('input#last-name').should('have.attr', 'placeholder', 'Last Name');

        cy.get('#email').should('have.attr', 'placeholder', 'Email');

        cy.get('button.form-field').should('have.text', 'Register');
    });

    it('successfully submit the registration form', () => {
        cy.get('#first-name').type("Harsha").should('have.value', "Harsha");
        cy.get('#last-name').type("Liyanage").should('have.value', "Liyanage");
        cy.get('#email').type("demo@t.com").should('have.value', "demo@t.com");
        cy.get('button.form-field').click();
        cy.get('div.success-message').should('be.visible');
    });

    // .only & .skip
    it('submit form without filling the form, proper error messages should be display', () => {
        cy.reload();
        cy.get('#first-name').type("Harsha").should('have.value', "Harsha");
        cy.get('#last-name').type("Liyanage").should('have.value', "Liyanage");
        cy.get('button.form-field').click();
        cy.get('span#email-error').should('have.text', 'Please enter an email address');

        cy.get('#last-name').focus().clear();
        cy.get('#last-name-error').should('have.text', 'Please enter a last name');

        cy.get('#first-name').focus().clear();
        cy.get('#first-name-error').should('have.text', 'Please enter a first name');
    });


})
