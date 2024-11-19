describe('First Test', () => {
    beforeEach('should visit the page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
    it('test login', () => {
        cy.get('.oxd-text--h5').contains('Login');
        cy.get('.oxd-text--p').contains('Password : admin123');        
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-topbar-header-title').contains('Dashboard');
        
        
    });
    //it('after login',() =>{
    //    cy.get('.oxd-topbar-header-title').contains('Dashboard')
    //   });
});