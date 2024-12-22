class FooterLinks{
    
    footerLinks() {

        // Verify the Catalog
        cy.contains('CATALOG').should('be.visible');
        cy.contains('Red Wine ').should('be.visible').click({ force: true });
        cy.contains('Rose wine').should('be.visible').click({ force: true });
        cy.contains('White wine').should('be.visible').click({ force: true });
        cy.contains('Sparkling wine').should('be.visible').click({ force: true });
        cy.contains('Promotions').should('be.visible').click({ force: true });
        cy.contains('Set and Gifts').should('be.visible').click({ force: true });

        // Verify the Support
        cy.contains('SUPPORT').should('be.visible')
        cy.contains('FAQ ').should('be.visible').click({ force: true });
        cy.contains('Terms of use').should('be.visible').click({ force: true });
        cy.contains('Privacy Policy').should('be.visible').click({ force: true });
        cy.contains('Delivery and Payment').should('be.visible').click({ force: true });
        cy.contains('Returns and Exchange').should('be.visible').click({ force: true });

        //Validate Our Company optin
        cy.contains('OUR COMPANY').should('be.visible')
        cy.contains('About us').should('be.visible').click({ force: true });
        cy.contains('Contact us').should('be.visible').click({ force: true });
        cy.contains('Reviews').should('be.visible').click({ force: true });
        cy.contains('Blog and News').should('be.visible').click({ force: true });
        cy.contains('Loyalty Program').should('be.visible').click({ force: true });
        cy.contains('Wine Subscription').should('be.visible').click({ force: true });

        // Vaeufy the Contacts
        cy.contains('CONTACTS').should('be.visible')
        cy.contains('+91 1234567890').should('be.visible').click({ force: true });
        cy.contains('Paypal pioneers.com').should('be.visible').click({ force: true });

        // Verify the Address
        cy.contains('ADDRESS').should('be.visible');
        cy.contains('Bengulure, India').should('be.visible');

        // Verify Working Hours
        cy.contains('WORKING HOURS').should('be.visible');
        cy.contains('Mon-Fri 9:00-18:00').should('be.visible');

        //Verify Catalog
        cy.contains('Subscribe to our newsletter').should('be.visible').click({ force: true });
        cy.contains('And get -20% on your first order').should('be.visible').click({ force: true });
        cy.get('[placeholder="example@gmail.com"]').should('be.visible').type('pavano@gmail.com').click({ force: true });
        cy.contains(' We only sell alcohol to adults').should('exist');
        cy.contains('© 2024 PAYPAL PIONEERS, ALL RIGHTS RESERVED').should('be.visible');

    }
}
export default FooterLinks;