class Search{

    search(){
        // Enter the product name 
        cy.get('[placeholder="Search your wine...."]').should('be.visible').type('Red');
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        cy.go('back');
    }

    NonExistingProduct(){
        // Enter the product name 
        cy.get('[placeholder="Search your wine...."]').should('be.visible').clear().type('Dark Wine');
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        cy.go('back');
    }

    BlankSearching(){
        // Enter the product name 
        cy.get('[placeholder="Search your wine...."]').should('be.visible')
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        
    }

    specialCharacters(){
        cy.get('[placeholder="Search your wine...."]').should('be.visible').clear().type('R');
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        cy.go('back');

        cy.get('[placeholder="Search your wine...."]').should('be.visible').clear().type('Wine2024');
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        cy.go('back');

        cy.get('[placeholder="Search your wine...."]').should('be.visible').clear().type('Wine@123#');
        // Click the search button
        cy.get('[class="landing_page_header_search_btn"]').should('be.visible').click({force:true});
        
    }
}
export default Search;