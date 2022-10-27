Feature: Adding movies

    As an admin
    I want to be able to add movies
    So I can keep track of my favorite movies

    Scenario: Adding a movie adds it to the list
        Given the user is logged in as admin
        When the user adds a new movie
        Then the movie is added to the list
