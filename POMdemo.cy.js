///<reference types ="cypress"/>

import {LoginPage} from "../pages/Login_page"
const loginPage = new LoginPage()

it('POM demo', function (){

    cy.visit('https://www.w3schools.com/')

    loginPage.clickLogin()

    loginPage.enterUsername('mariyamzaheer4@gmail.com')

    loginPage.enterPassword('Z.maryam123*')

    loginPage.clickButton()

    //cy.contains('Free Website').click()
    //cy.get('.ws-hide-950').click()
    //cy.contains('Learn HTML').click()
    //cy.get('#w3loginbtn').click()
    //cy.get('#modalusername').type('mariyamzaheer4@gmail.com')
    //cy.get('#current-password').type('Z.maryam123*')
    //cy.get('.Button_button__URNp\+').click()
    //cy.contains('Forgot password?').click()
 })

