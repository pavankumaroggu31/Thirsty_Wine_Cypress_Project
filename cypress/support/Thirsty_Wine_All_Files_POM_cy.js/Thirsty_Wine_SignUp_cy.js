class signUpPage {

    visitURL() {
        // Verify URL
        cy.visit("https://pay-pal-pioneers-068.vercel.app/");
    }

    signUP() {
        // Verify clicking signup dropdown icon
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        // Verify signup
        cy.contains('Sign Up').should('exist').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'register');
    }

    validCredentials() {
        // Verify valid name
        cy.get('[placeholder="Name"]').should('be.visible').type('Pavan Kumar Oggu');
        // Verify valid email
        cy.get('[placeholder="Email"]').should('be.visible').type('pavankumaroggu@gmail.com');
        // Verify valid password
        cy.get('[placeholder="Password"]').should('be.visible').type('pavan@1997');
        // Verify the dropdown
        cy.get('[name="role"]').should('be.visible').select('User');
        // Verify the register button
        cy.get('[class="chakra-button css-1wz1eic"]').should('be.visible').click({ force: true });
       // cy.contains('Registration successful.').should('be.visible');
      //   cy.contains('User already exists.').should('be.visible');
    }

    invalidCredentials() {
        // Verify invalid name
        cy.get('[placeholder="Name"]').type('123');
        // Verify invalid email
        cy.get('[placeholder="Email"]').type('123@gmail.com');
        // Verify invalid password
        cy.get('[placeholder="Password"]').type('123');
        // Verify the dropdown
        cy.get('[name="role"]').select('User');
        // Verify the register button
        cy.get('[class="chakra-button css-1wz1eic"]').click({ force: true });
        //cy.contains('Registration successful.').should('be.visible');
        //cy.contains('User already exists.').should('be.visible');
    }

    blankRegister() {
        // Blank login
        cy.get('[class="chakra-button css-1wz1eic"]').should('be.visible').click({ force: true });
    }

}

export default signUpPage;