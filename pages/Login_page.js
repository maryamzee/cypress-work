export class LoginPage{

    login_button = '#w3loginbtn'
    username_textbox = '#modalusername'
    password_textbox = '#current-password'
    forgot_link = 'Forgot password?'
       
        clickLogin(){
            cy.get(this.login_button).click()
        }

        enterUsername(username){
            cy.get(this.username_textbox).type(username)
        }

        enterPassword(password){
            cy.get(this.password_textbox).type(password)
        }

        clickButton(){        
            cy.contains(this.forgot_link).click()
        }



}