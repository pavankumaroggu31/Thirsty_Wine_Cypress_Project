class filters {

    openTheProduct() {
        // click the red option on home page
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        cy.url().should('contain', 'catlog');
        // cy.xpath('(//p[@class="product-desc"])[3]').should('exist').click({ force: true });
        // cy.url().should('contain', 'productpage');
    }

    Filters() {
        // Verify the all recommended titles
        cy.contains('All Products').should('be.visible').click();
        cy.get('[value="Sancerre Blanc, 0,75L"]').should('be.visible')
        cy.get('[value="Chablis Premier Cru, 0,75L"]').should('be.visible')
        cy.get('[value="Riesling Trocken, 0,75L"]').should('be.visible')
        cy.get('[value="Brunello di Montalcino, 0,75L"]').should('be.visible')
    }

}
export default filters;