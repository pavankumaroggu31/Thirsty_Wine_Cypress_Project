class CheckOut {

    ValidInputs() {
        // Click the red option on home page
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        // click the product
        cy.xpath('(//p[@class="product-desc"])[3]').should('exist').click({ force: true });
        // click the add to cart button
        cy.contains('Add to cart').should('be.visible').click({ force: true });
        // open the cart
        cy.get('[data-icon="cart-shopping"]').should('be.visible').click({ force: true });
        // Adult Signature
        cy.contains('I am 18+').should('be.visible');
        cy.get('[class="chakra-switch__thumb css-7roig"]').should('be.visible').click({ force: true });
        // Click the Checkout button
        cy.get('[class="chakra-button checkout-button css-41aesz"]').click({ force: true });

        // verify address Form giving valid inputs
        // New Customer
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[1]').should('be.visible').click({ force: true });
        cy.contains('I am a new customer').should('exist');
        // I hava an account
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[2]')
        cy.contains('I have an account').should('exist');
        //Verify First Name
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[1]').should('be.visible').type('Pavan Kumar')
        // Verify last Name
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[2]').should('be.visible').type('Oggu')
        // Verify Phone Number 
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[3]').should('be.visible').type(9059007119)
        // Verify Email ID 
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[4]').should('be.visible').type('pavankumaroggu31@gmail.com')
        // Your message (optional)
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[5]').should('be.visible').type('I like your interface')
        // Verify Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // Verify Current Address
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[1]').should('be.visible').type('Tenali')
        // Verify City
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[2]').should('be.visible').type('Tenali')
        // Verify District
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[3]').should('be.visible').type('Guntur')
        // Verify State
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[4]').should('be.visible').type('Andhra pradesh')
        // Verify Pincode
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[5]').should('be.visible').type(52222)
        // Verify Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // Verify Payment Options
        // Verify Online Payment
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[1]').should('be.visible').click({ force: true });
        cy.contains('Online Payment').should('exist');
        // Verify Payment upon receipt
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[2]').should('be.visible').click({ force: true });
        cy.contains('Payment upon receipt').should('exist');

        // Verify and click the Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // verify order review visible or not
        cy.contains('Order Review').should('be.visible');

        // Verify details and click Confirm Button
        cy.contains('Confirm').should('be.visible').click({ force: true });

        // Verify Successsfull Message
        cy.contains('Thank you for your purchase!').should('be.visible');
        cy.contains('You can find details in a confirmation mail or your account').should('be.visible');

        // Verify Contine Shopping button
        cy.contains('Continue shopping').should('be.visible').click({ force: true });

    }

    inValidInputs() {
        // Click the red option on home page
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        // click the product
        cy.xpath('(//p[@class="product-desc"])[3]').should('exist').click({ force: true });
        // click the add to cart button
        cy.contains('Add to cart').should('be.visible').click({ force: true });
        // open the cart
        cy.get('[data-icon="cart-shopping"]').should('be.visible').click({ force: true });
        // Adult Signature
        cy.contains('I am 18+').should('be.visible');
        cy.get('[class="chakra-switch__thumb css-7roig"]').should('be.visible').click({ force: true });
        // Click the Checkout button
        cy.get('[class="chakra-button checkout-button css-41aesz"]').click({ force: true });

        // verify address Form giving valid inputs
        // New Customer
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[1]').should('be.visible').click({ force: true });
        cy.contains('I am a new customer').should('exist');
        // I hava an account
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[2]')
        cy.contains('I have an account').should('exist');
        //Verify First Name
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[1]').should('be.visible').type(1)
        // Verify last Name
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[2]').should('be.visible').type(1)
        // Verify Phone Number 
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[3]').should('be.visible').type(1)
        // Verify Email ID 
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[4]').should('be.visible').type('1@gmail.com')
        // Your message (optional)
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[5]').should('be.visible').type(1)
        // Verify Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // Verify Current Address
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[1]').should('be.visible').type(1)
        // Verify City
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[2]').should('be.visible').type(1)
        // Verify District
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[3]').should('be.visible').type(1)
        // Verify State
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[4]').should('be.visible').type(1)
        // Verify Pincode
        cy.xpath('(//input[@class="chakra-input css-ox0j2p"])[5]').should('be.visible').type(1)
        // Verify Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // Verify Payment Options
        // Verify Online Payment
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[1]').should('be.visible').click({ force: true });
        cy.contains('Online Payment').should('exist');
        // Verify Payment upon receipt
        cy.xpath('(//span[@class="chakra-radio__control css-8o2sux"])[2]').should('be.visible').click({ force: true });
        cy.contains('Payment upon receipt').should('exist');

        // Verify and click the Continue button
        cy.contains('Continue').should('be.visible').click({ force: true });

        // verify order review visible or not
        cy.contains('Order Review').should('be.visible');

        // Verify details and click Confirm Button
        cy.contains('Confirm').should('be.visible').click({ force: true });

        // Verify Successsfull Message
        cy.contains('Thank you for your purchase!').should('be.visible');
        cy.contains('You can find details in a confirmation mail or your account').should('be.visible');

        // Verify Contine Shopping button
        cy.contains('Continue shopping').should('be.visible').click({ force: true });

    }
}
export default CheckOut;