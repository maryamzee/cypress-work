

 import {orange} from '../pages/testpage'

 const orangeFood = new orange()

 it('Food daires', function(){

      cy.visit('https://khaadi.com/')


      orangeFood.AppleEmail()

      orangeFood.BananaPassword()

      orangeFood.PeachButton()


 })


 it('Food daires 2', function(){

     cy.visit('https://khaadi.com/')


     orangeFood.AppleEmail()

     orangeFood.BananaPassword()

     orangeFood.PeachButton()


})