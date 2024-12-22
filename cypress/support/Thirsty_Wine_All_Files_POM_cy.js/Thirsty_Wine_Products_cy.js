class Products {
    productName = '[class="product-desc"]';      // Selector for product name
    productPrice = '[class="product-price-container"]';    // Selector for product price
    productRating = '[class="product-rating"]';  // Selector for product description
    productList = '[class="product-card-container"]';           // Selector for individual product container

    // Method to validate all products details (name, price, description)
    validateAllProductDetails() {
        cy.get(this.productList).each(($product) => {
            // Validate product name
            cy.wrap($product).find(this.productName).should('exist').and('not.be.empty');

            // Validate product price
            cy.wrap($product).find(this.productPrice).should('exist')

            // Validate product description
            cy.wrap($product).find(this.productRating).should('exist')
        });
    }

    // Method to validate specific product details (if you want to validate specific details)
    validateSpecificProductDetails(expectedName, expectedPrice, expectedrating) {
        cy.get(this.productName).should('contain', expectedName);
        cy.get(this.productPrice).should('contain', expectedPrice);
        cy.get(this.productRating).should('contain', expectedrating);
    }
}

export default Products;

