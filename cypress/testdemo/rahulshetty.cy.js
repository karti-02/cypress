describe('Test Suit', () => {
    it('Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@id="dropdown-class-example"]').select('Option2').should('have.value', 'option2')
    });
});