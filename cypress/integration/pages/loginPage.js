const URL = 'http://localhost:8080/users/login'
const USERNAME_INPUT = 'input[name="username"]'
const PASSWORD_INPUT = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[type="submit"]'

class LoginPage {
  static visit() {
    cy.visit(URL)
  }

  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }
}

export default LoginPage