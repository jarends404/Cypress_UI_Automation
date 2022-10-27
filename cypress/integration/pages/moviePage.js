const URL = 'http://localhost:8080/product'
const EDIT_BUTTON = 'li[class*="edit-button"]'
const CREATE_NEW_BUTTON = 'input[value="Create new"]'
const TITLE_INPUT = 'input[name="title"]'
const RELEASE_YEAR_INPUT = 'input[name="releaseYear"]'
const DESCRIPTION_INPUT = 'textarea[name="description"]'
const WEBSITE_INPUT = 'input[name="website"]'
const SUBMIT_BUTTON = 'input[value="Submit"]'

const MOVIE_TABLE_ENTRY = 'tbody tr'

const GENRES = {
    'Action': '#genre_1',
    'Adventure': '#genre_2',
    'Animated': '#genre_3',
    'Comedy': '#genre_4',
    'Drama': '#genre_5',
    'Fantasy': '#genre_6',
    'Historical': '#genre_7',
    'Horror': '#genre_8',
    'Romance': '#genre_9',
    'Science fiction': '#genre_10',
    'Thriller': '#genre_11',
    'Western': '#genre_12',
}

class MoviePage {
  static visit() {
    cy.visit(URL)
  }

  static edit() {
    cy.get(EDIT_BUTTON).click()
  }

  static createNew(title, release_year, genre, description, website) {
    cy.get(CREATE_NEW_BUTTON).click()
    cy.get(TITLE_INPUT).clear()
    cy.get(TITLE_INPUT).type(title)
    cy.get(RELEASE_YEAR_INPUT).type(release_year)
    cy.get(GENRES[genre]).click()
    cy.get(DESCRIPTION_INPUT).type(description)
    cy.get(WEBSITE_INPUT).type(website)
    cy.get(SUBMIT_BUTTON).click()
  }

  static verifyMovieInList(title, release_year) {
    cy.contains(MOVIE_TABLE_ENTRY, title)
        .should('contain.text', release_year)
  }
}

export default MoviePage