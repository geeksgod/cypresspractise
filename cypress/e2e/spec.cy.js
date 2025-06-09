describe("Cura Make Appointment",() => {
  beforeEach('visithomepage',()=>{
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
  })
  it('Click on Make Appointment',()=>{
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type("John Doe")
    cy.get('#txt-password').type("ThisIsNotAPassword")
    cy.get('#btn-login').click()
    cy.get('select').select('Hongkong CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click();
    cy.get('#radio_program_medicaid').click();
    cy.get('#txt_visit_date').type('30/03/2020');
    cy.get('#txt_comment').click({ force: true });
    cy.get('#txt_comment').type('Pramod Dutta will be avaiable at 30/03/2020');
    cy.get('#btn-book-appointment').click();
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Pramod Dutta will be avaiable at 30/03/2020');
    cy.get('#menu-toggle').click()
    cy.contains("Logout")
  })


})