# API Research

## Reason for using third-party APIs

- We want our users to be able to conveniently browse various recipes based on the ingredients they have
- We want to personalize the recipes based on user preferences and dietary restrictions
- Using third-party APIs can potentially speed up the development process
- Third-party APIs are designed to handle a large number of requests and users, which can help our app scale more easily.

## Some limitation of using third-party APIs

- The app's functionality relies on external services. For example, if the third-party API is down for maintainance, it can affect our app
- While some APIs offer free tiers, others require some fees as the usage increases
- The API does not cater to all the data we wish to retrieve.
- Expensive to maintain for long term use.

## Learning opportunities

- How to fetch JSON data using APIs call
- How to process the fetched data and send them to the frontend

## Some potential APIs that could be integrated into our Recipe App

- [Spoonacular API](https://spoonacular.com/food-api/docs): searching for recipes based on name, ingredients, etc.
- [TheMealDB API](https://www.themealdb.com/api.php): searching for meal based on name
- [BBC Good Food API](https://rapidapi.com/boxapi/api/bbc-good-food-api): search for recipe using name
- [EDAMAM](https://developer.edamam.com/edamam-docs-recipe-api): search of recipe using HTTPS requests

## Expectations

- We expect to call third-party APIs from the backend of our app, process the response data and send it to the frontend.
- We expect to have an efficient way to parse, organize, and sort data from the web
- We expect the information retrieved from APIs to be reliable and up-to-date

## Associated Jira tasks

- As a user, I would like to have choices of existing recipes that I can cook from the list of ingredients
- As a user, I would like a list of recommended recipes from the ingredients I already have, so that I could save time looking up recipes on the Internet