describe("Daily Auction", () => {
    it("Can fill the form", () => {
      cy.visit("/");
      cy.contains("Daily Auction Annoucement");
      //cy.get('#tenderDate').type('10/10/2018');
      cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').type('29/May/2020');
      //cy.get(':nth-child(5) > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .MuiTypography-root').click();
      cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root > .MuiIconButton-label').click();
      cy.get(':nth-child(3) > .MuiButton-label').click();
      //cy.get('select').select('Option 2')
      cy.get('#commodity').select('cmd1')
      //cy.get('#tenderNumber').type('113123');
      cy.get('.MuiGrid-container.MuiGrid-item > :nth-child(2) > .MuiButtonBase-root').click();
      cy.get('.MuiTypography-colorSecondary').contains('Successful')
      
      
  });