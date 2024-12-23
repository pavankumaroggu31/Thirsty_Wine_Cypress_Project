import signUpPage from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_SignUp_cy";
import logInPage from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Login_cy";
import homePage from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Home_Page_cy";
import productPage from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_ProductPage_cy";
import Products from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Products_cy";
import AddToCart from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Add_To_Cart_cy";
import WishList from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Wish_List_cy";
import CheckOut from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_CheckOut_cy";
import FooterLinks from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Footer_Links_cy";
import Search from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Search_cy";
import filters from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Filters_cy";
import logOut from "../../support/Thirsty_Wine_All_Files_POM_cy.js/Thirsty_Wine_Log_Out_cy";


// cypress.open('fail',(error, runnable)=> {
//     cy.log(error.message);
//     return false;
// });

// cy.on('uncaught:exception',(error, runnable)=> {
//     return false;
// });

describe('Thirsty Wine', () => {

    const homepage = new homePage();
    const signup = new signUpPage();
    const login = new logInPage();
    const products = new productPage();
    const allProducts = new Products();
    const cart=new AddToCart();
    const wishList=new WishList();
    const checkOut=new CheckOut();
    const footerlinks=new FooterLinks();
    const search=new Search();
    const filter=new filters();
    const logout=new logOut();

    beforeEach(() => {
        // Visit the site
        cy.visit("https://pay-pal-pioneers-068.vercel.app/");
        login.logIn(); // Go to login page
        login.validCredentialsForLogin(); // Verify with valid credentials
        //cy.url().should('not.include', 'about:blank');
    });

    it('Sign Up', () => {
        signup.visitURL();
        signup.signUP(); // Go to login page
        signup.validCredentials(); // Verify with valid credentials
        //signup.invalidCredentials();
        //signup.blankRegister();
    });

    it.skip('Log In', () => {
        login.visitURL();
        login.logIn();
        login.validCredentialsForLogin();
        cy.url().should('not.include', 'about:blank');
        // login.invalidCredentialsForLogin();
        //login.blankLogin();
    });

    it('Home Page', () => {
        // Verify home page
        homepage.headerSection(); 
        homepage.whatWouldYouLikeSection(); 
        homepage.landingPageSlidersOnHomePage();
        homepage.setAndGiftsTitleOnHomePage();
        homepage.wineSubscritptions();
        homepage.bestSellers_GreatDeals_HighlyRated();
    });

    it('Product Page', () => {
        products.openTheProductPage(); // Open the products
        products.category(); // Verify sortings
        products.price(); // Verify sortings
        products.colors(); // Verify sortings
    });

    it('All Products check on Products Page', () => {
        // Verify products details
        allProducts.validateAllProductDetails();
        const expectedName = 'Chablis Premier Cru, 0,75L';       // product name
        const expectedPrice = '96.18$';         // product price
        const expectedrating = '2.1'; // product rating

        // Validate the specific product's details
        allProducts.validateSpecificProductDetails(expectedName, expectedPrice, expectedrating);
    });

    it('Add To Cart', () => {
        cart.CartFunctionality(); // Open the cart
        cart.inreaseItemsFromCart(); // Verify Increase items
        cart.decreaseItemsFromCart();// Verify decrease items
        cart.removeItemsFromCart(); // Verify reomve items
        cart.AdultSignature(); // verify button
    
    });

    it('Add To Wish List', () => {
        wishList.OpenTheWishList(); // Open the wishlist
        wishList.AddToWishList(); // Add the product
    });

    it('Checkt Out Process', () => {
        //checkOut.ValidInputs(); // Verify with valid address
        checkOut.inValidInputs(); // Verify with invalid address
    });

    it('Footer Links',()=>{
        footerlinks.footerLinks(); // Verify footer links
    })

    it('Search bar',()=>{
        search.search();
        search.NonExistingProduct();
        search.BlankSearching();
        search.specialCharacters();
    })

    it('Filters', () => {
        filter.openTheProduct();
        filter.Filters();
    });

    it('Log Out', () => {
        logout.Logout();
    });

});
