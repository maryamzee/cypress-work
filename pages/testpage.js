export class orange{

    AppleEmail(){
        cy.get('.select-selected').click()
    }

    BananaPassword(){
        cy.get('.select-items > :nth-child(1)').click()
    }

    PeachButton(){
        cy.get('.btn').click()
    }
}


