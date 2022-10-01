const { describe } = require("mocha");


describe('Commands Example', function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
        cy.typeLogin('standard_user','secret_sauce');

    })
    it('1st Test case', function(){
        cy.log('test');
    })
})