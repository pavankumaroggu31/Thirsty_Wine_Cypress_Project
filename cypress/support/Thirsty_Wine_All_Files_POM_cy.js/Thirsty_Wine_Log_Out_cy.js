class logOut{

    Logout(){
        cy.get('[class="landing_page_header_login_dropdown_parent"]').should('be.visible').click({ force: true });
        // Verify Url chek
        cy.contains('Sign out').click({ force: true });
    }
}
export default logOut;