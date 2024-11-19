describe('Test Actividad Clase4', () => {
    beforeEach('should visit the page', () => {
        cy.visit('https://automationintesting.online/');
    });
    it('should find the title', () => {
        cy.get('img').should('be.visible');
        cy.get('.col-sm-5').contains('Shady Meadows B&B');
        cy.get('.col-sm-5').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
        cy.get('.col-sm-5').contains('012345678901');
        cy.get('.col-sm-5').contains('fake@fakeemail.com');
        cy.get('.col-sm-10').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
    });
});