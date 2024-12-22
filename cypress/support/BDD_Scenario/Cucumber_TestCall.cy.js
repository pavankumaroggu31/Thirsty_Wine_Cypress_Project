import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Thirsty Wine Registration Page
Given('I visit the registration page', () => {
    cy.visit("https://pay-pal-pioneers-068.vercel.app/");
})

When('I fill in the registration form', () => {
    cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
    cy.contains('Sign Up').should('exist').click({ force: true });
    cy.get('[placeholder="Name"]').should('be.visible').type('Pavan Kumar Oggu');
    cy.get('[placeholder="Email"]').should('be.visible').type('pavankumaroggu@gmail.com');
    cy.get('[placeholder="Password"]').should('be.visible').type('pavan@1997');
    cy.get('[name="role"]').should('be.visible').select('User');
    cy.get('[class="chakra-button css-1wz1eic"]').should('be.visible').click({ force: true });
})

Then('I should see a success message', () => {
   // cy.contains('Registration successful.', { timeout: 10000 }).should('be.visible');
    cy.contains('User already exists.').should('be.visible');
})


// Thirsty Wine Login Page
Given('I visit the login page', () => {
    cy.visit('https://pay-pal-pioneers-068.vercel.app/');
})

When('Open the login page', () => {
    cy.get('[data-icon="user"]').should('be.visible').click({ force: true });
    cy.contains('Log In').should('exist').click({ force: true });
    
})

Then('Login to the website', () => {
    cy.get('[placeholder="Email"]').should('be.visible').type('pavankumaroggu31@gmail.co@gmail.com');
    cy.get('[placeholder="Password"]').should('be.visible').type('anusha1');
    cy.get('[placeholder="Password"]').should('have.attr', 'type', 'password');
    cy.get('[class="chakra-button css-1wz1eic"]').click({ force: true });
})


// Thirsty Wine header section
Given('I visit the home page', () => {
    cy.visit('https://pay-pal-pioneers-068.vercel.app/');
})

When('Check the Header Section', () => {
    // Open the red wine
    cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
    // click the home icon
    cy.get('[class="landing_page_header_logo"]').should('be.visible').click({ force: true });
})

Then('Check the best sellers option', () => {
    // click the best sellers
    cy.contains('Best Sellers').should('be.visible').click({ force: true });
    cy.contains('Brunello di Montalcino, 0,75L').click({ force: true });
})


// Thirsty Wine footer links
Given('Visit the home', () => {
    cy.visit('https://pay-pal-pioneers-068.vercel.app/');
})

When('Verify Footer links', () => {
    // Verify the Support
    cy.contains('SUPPORT').should('be.visible')
    cy.contains('FAQ ').should('be.visible').click({ force: true });
    cy.contains('Terms of use').should('be.visible').click({ force: true });
    cy.contains('Privacy Policy').should('be.visible').click({ force: true });
    cy.contains('Delivery and Payment').should('be.visible').click({ force: true });
    cy.contains('Returns and Exchange').should('be.visible').click({ force: true });

})

Then('Verify Contct,About us', () => {
    cy.contains('About us').should('be.visible').click({ force: true });
        cy.contains('Contact us').should('be.visible').click({ force: true });
})


// Thirsty Wine product page
Given('Open the product',()=>{
    cy.visit('https://pay-pal-pioneers-068.vercel.app/');
    cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
    cy.url().should('contain', 'catlog');
})

When('Select the option',()=>{
    cy.contains('All Products').should('be.visible').click();
    cy.get('[value="Sancerre Blanc, 0,75L"]').should('be.visible')
    cy.get('[value="Chablis Premier Cru, 0,75L"]').should('be.visible')
    cy.get('[value="Riesling Trocken, 0,75L"]').should('be.visible')
    cy.get('[value="Brunello di Montalcino, 0,75L"]').should('be.visible')
})

Then('Select the price',()=>{
    cy.get('[class="sidebar-title price-title"]').should('contain', 'Price');
    cy.xpath('(//span[@class="checkmark"])[6]').should('be.visible').click({ force: true });
    cy.xpath('(//span[@class="checkmark"])[7]').should('be.visible')
    cy.xpath('(//span[@class="checkmark"])[8]').should('be.visible')
    cy.xpath('(//span[@class="checkmark"])[9]').should('be.visible')
    cy.xpath('(//span[@class="checkmark"])[10]').should('be.visible')
})


// Thirsty Wine Add to cart
Given('Open the home page',()=>{
    cy.visit('https://pay-pal-pioneers-068.vercel.app/');
    cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
    cy.url().should('contain', 'catlog');
})

When('Add the product to cart',()=>{
    cy.xpath('(//div[@class="landing_page_navbar_children"])[1]').should('be.visible').click({ force: true });
    cy.url().should('contain', 'catlog');
    cy.xpath('(//span[@class="product-cart-button"])[3]').click({ force: true });
})

Then('Verify Added to cart message',()=>{
    cy.contains('Product added to cart').should('be.visible');
})


