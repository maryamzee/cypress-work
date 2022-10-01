///<reference types ="cypress"/>

it('xyz', () =>{
    cy.visit('https://www.google.com/')

    cy.get('.gLFyf123', {timeout:5000}).type('Automation step by step {Enter}')


 
    //cy.contains('Google Search').click()


       //cy.contains('Videos').click()
})
