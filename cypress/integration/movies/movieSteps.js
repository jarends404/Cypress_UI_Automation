import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/loginPage'
import MoviePage from '../pages/moviePage'

const TITLE = 'Test Title ' + new Date().getTime()
const RELEASE_YEAR = '2022'
const GENRE = 'Horror'
const DESCRIPTION = 'Test Description'
const WEBSITE = 'http://www.test.com'

Given('the user is logged in as admin', () => {
    LoginPage.visit()
    LoginPage.fillUsername('admin')
    LoginPage.fillPassword('admin')
    LoginPage.submit()
})

When('the user adds a new movie', () => {
    MoviePage.visit()
    MoviePage.edit()
    MoviePage.createNew(TITLE, RELEASE_YEAR, GENRE, DESCRIPTION, WEBSITE)
})

Then('the movie is added to the list', () => {
    MoviePage.visit()
    MoviePage.verifyMovieInList(TITLE, RELEASE_YEAR)
})
