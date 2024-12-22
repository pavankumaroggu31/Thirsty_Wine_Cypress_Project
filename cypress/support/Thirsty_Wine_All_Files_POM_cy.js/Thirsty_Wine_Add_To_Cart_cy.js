class AddToCart {

    CartFunctionality() {

        // click the red option on home page
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        cy.url().should('contain', 'catlog');
        // Add the product to cart
        cy.xpath('(//span[@class="product-cart-button"])[3]').click({ force: true });
        cy.contains('Product added to cart').should('be.visible');
        // Add the product to cart
        cy.xpath('(//span[@class="product-cart-button"])[4]').click({ force: true });
        cy.contains('Product added to cart').should('be.visible');
        // Add the product to cart
        cy.xpath('(//span[@class="product-cart-button"])[11]').click({ force: true });
        cy.contains('Product added to cart').should('be.visible');

    }

    inreaseItemsFromCart() {
        // open the cart
        cy.get('[data-icon="cart-shopping"]').should('be.visible').click({ force: true });
        // increase the item
        cy.xpath('(//i[@class="fa-solid hover-effect fa-plus"])[3]').should('exist').click({ force: true });
        //  cy.wait(2000);
        // increase the item
        cy.xpath('(//i[@class="fa-solid hover-effect fa-plus"])[2]').should('exist').click({ force: true });
        //  cy.wait(2000);
    }

    decreaseItemsFromCart() {
        // open the cart
        cy.get('[data-icon="cart-shopping"]').should('be.visible').click({ force: true });
        // decrease the item
        cy.xpath('(//i[@class="fa-solid hover-effect fa-minus"])[2]').should('exist').click({ force: true });
        // cy.wait(2000);
    }

    removeItemsFromCart() {
        // open the cart
        cy.get('[data-icon="cart-shopping"]').should('be.visible').click({ force: true });
        // cy.wait(5000);
        // Remove the item
        cy.xpath('(//i[@class="fa-solid hover-effect fa-xmark"])[2]').should('exist').click({ force: true });
        // cy.wait(5000);
        // Remove the item 
        cy.xpath('(//i[@class="fa-solid hover-effect fa-xmark"])[3]').should('exist').click({ force: true });
    }

    AdultSignature() {
        // verify button signature
        cy.contains('I am 18+').should('be.visible');
        cy.get('[class="chakra-switch__thumb css-7roig"]').should('be.visible').click({ force: true });

    }
}
export default AddToCart;