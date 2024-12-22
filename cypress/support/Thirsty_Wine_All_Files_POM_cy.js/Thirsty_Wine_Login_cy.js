class logInPage {

    visitURL() {
        // Verify URL
        cy.visit("https://pay-pal-pioneers-068.vercel.app/");
    }

    logIn() {
        // Verify clicking signup dropdown icon
        cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
        // click the login button
        cy.contains('Log In').should('exist').click({ force: true });
        // Verify Url chek
        cy.url().should('contain', 'login');
        
    }

    validCredentialsForLogin() {
        // Enter valid email
        cy.get('[placeholder="Email"]').should('be.visible').type('pavan@gmail.com');
        // Enter valid password
        cy.get('[placeholder="Password"]').should('be.visible').type('masai');
        // Verify that the password is entered in masked form as bullets
        cy.get('[placeholder="Password"]').should('have.attr', 'type', 'password');
        // Verify to click the login buton
        cy.get('[class="chakra-button css-1wz1eic"]').click({ force: true });
        // cy.get('.landing_page_header_login_dropdown_parent > div').should('be.visible').click({ force: true })
        // cy.contains('Sign out').click({ force: true })
    }


    invalidCredentialsForLogin() {
        // Enter valid email
        cy.get('[placeholder="Email"]').should('be.visible').type('cghgvj31@gmail.com');
        // Enter valid password
        cy.get('[placeholder="Password"]').should('be.visible').type('ab123');
        // Verify that the password is entered in masked form (i.e., as bullets)
        cy.get('[placeholder="Password"]').should('have.attr', 'type', 'password');
        // Verify to click the login buton
        cy.get('[class="chakra-button css-1wz1eic"]').should('be.visible').click({ force: true });
        // cy.contains('Login failed.').should('be.visible');
        // cy.contains('Wrong email or password.').should('be.visible');
    }

    blankLogin() {
        // Blank login
        cy.get('[class="chakra-button css-1wz1eic"]').should('be.visible').click({ force: true });
    }



}
export default logInPage;