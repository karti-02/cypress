describe('Automation Test Store testsuit', () => {
    it('Conatct-Us', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath('(//*[text()="Contact Us"])[2]').click()
        cy.get("#ContactUsFrm_first_name").type("Ashish");
        cy.get("#ContactUsFrm_email").type("Ashish@gmail.com");
        cy.get("#ContactUsFrm_enquiry").type("heLLO");
        cy.xpath("//button[@title='Submit']").click();

        // btn btn-primary lock-on-click

    });
});