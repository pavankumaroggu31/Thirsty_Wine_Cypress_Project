class WishList {

    AddToWishList() {
        // Click the red option
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        // Verify URL
        cy.url().should('contain', 'catlog');
        // Add to wish list
        cy.xpath('(//i[@class="fa-regular fa-heart heart-icon"])[5]').should('be.visible').click({ force: true });
        // Verify wishlist message displayed or not
        cy.contains('Added to wishlist').should('be.visible');

        // cy.xpath('(//i[@class="fa-regular fa-heart heart-icon"])[9]').click({ force: true });
        // cy.contains('Added to wishlist').should('be.visible');

        // cy.xpath('(//i[@class="fa-regular fa-heart heart-icon"])[7]').click({ force: true });
        // cy.contains('Added to wishlist').should('be.visible');

    }

    OpenTheWishList() {

        // open the wishlist 
        cy.get('[class="landing_page_header_fav"]').should('be.visible').click({ force: true });
        // click the add to cart button in wishlit
        cy.xpath('(//button[@class="wishlist-card-button"])[1]').should('be.visible').click({ force: true });
        // Verify Prodcut Added message displayed or not
        cy.contains('Product added to cart').should('be.visible');
        // Remove the item from wishlist
        cy.xpath('(//button[@class="wishlist-card-button remove-button"])[2]').should('be.visible').click({ force: true });
    }
}
export default WishList;