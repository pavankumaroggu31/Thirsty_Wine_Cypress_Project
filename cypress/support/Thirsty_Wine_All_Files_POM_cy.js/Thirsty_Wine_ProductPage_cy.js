class productPage {

    openTheProductPage() {
        // click the red option on home page
        cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
        cy.url().should('contain', 'catlog');
        // cy.xpath('(//p[@class="product-desc"])[3]').should('exist').click({ force: true });
        // cy.url().should('contain', 'productpage');
    }

    category() {
        // Select the all radio button
        cy.xpath('(//span[@class="checkmark"])[1]').should('be.visible').click({ force: true });
        // Select the white wine radio button
        cy.xpath('(//span[@class="checkmark"])[2]').should('be.visible')
        // Select the red wine radio button
        cy.xpath('(//span[@class="checkmark"])[3]').should('be.visible')
        // Select the rose wine radio button
        cy.xpath('(//span[@class="checkmark"])[4]').should('be.visible')
        // Select the wine sets radio button
        cy.xpath('(//span[@class="checkmark"])[5]').should('be.visible')

    }

    price() {

        cy.get('[class="sidebar-title price-title"]').should('contain', 'Price');
        // Select the all radio button
        cy.xpath('(//span[@class="checkmark"])[6]').should('be.visible').click({ force: true });
        // select the $0-50
        cy.xpath('(//span[@class="checkmark"])[7]').should('be.visible')
        // select the $50-$100
        cy.xpath('(//span[@class="checkmark"])[8]').should('be.visible')
        // select the $100-$150
        cy.xpath('(//span[@class="checkmark"])[9]').should('be.visible')
        // select the over$150
        cy.xpath('(//span[@class="checkmark"])[10]').should('be.visible')
    }

    colors() {
        cy.get('[class="sidebar-title color-title"]').should('contain', 'Colors');
        // Select the all radio button
        cy.get('[class="checkmark all"]').should('be.visible')
        // Select sparkling color
        cy.xpath('(//span[@class="checkmark"])[11]').should('exist')
        // Select red color
        cy.xpath('(//span[@class="checkmark"])[12]').should('exist')
        // Select white color
        cy.xpath('(//span[@class="checkmark"])[13]').should('exist').click({ force: true });
    }



}
export default productPage;