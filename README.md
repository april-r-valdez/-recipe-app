# Recipes App

> Outline a brief description of your project.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#our-team)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributions](#contributions)
- [Reports](#reports)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## Our Team

- Jeffrey Hsu
- April Valdez
- Brent Hoover
- Viet Vu
- Mandil Pradhan

## Our Vision

- We are building a recipe generating application so that food enthusiasts can conveniently browse recipes based on the ingredients they currently have in stock.

## Technologies Used

- React.js
- Python
- Firebase
- GitKraken

## Features

### Sprint 1

#### Contributions

**Brent**: "provided users with a simple form for saving, storing, and displaying their ingredient entries" 
  - `Jira Task: Brent - textboxes to enter ingredients (incld. amount and other details)` 
    - [Scrum-25](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-25) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-25-bah4-create-textbox) 
  - `Jira Task: Brent - save ingredient entries somewhere` 
    - [Scrum-26](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-26) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-26-brent---save-ingredient-entries) 
  - `Jira Task: Brent - show added ingredients` 
    - [Scrum-28](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-28) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/SCRUM-28-brent---show-added-ingredients) 
    - `Jira Task: Brent - add unit tests to make sure textboxes work correctly` 
    - [Scrum-33](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-33) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-33-brent---add-unit-tests-for-textbox) 
  - `Jira Task: Brent - research existing databases` 
    - [Scrum-31](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-31) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-31-brent---research-databases) 
  - `Jira Task: Brent - Brent - research scraping api` 
    - [Scrum-30](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-30) 
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-30-brent---research-scraping-api)
<br />

**Viet**:"provided text boxes for user inputs and add tests to make sure input components function correctly, researched some potential APIs that could be used in the app"

  - `Jira Task: Viet - textboxes to enter ingredients (incld. amount and other details)`
    - [Scrum-38](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-38)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-38-llv43-create-textbox)
  - `Jira Task: Viet - save ingredient entries somewhere`
    - [Scrum-39](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-39)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-39-viet---save-ingredient-entries-)
  - `Jira Task: Viet - show added ingredients`
    - [Scrum-41](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-41)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-41-viet--show-added-ingredients)
  - `Jira Task: Viet - add unit tests to make sure textboxes work correctly`
    - [Scrum-41](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-40)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-40-viet---add-unit-tests-to-make-s)
  - `Jira Task: Viet - research scraping api`
    - [Scrum-42](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-42)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-42-viet---research-scraping-api)
  - `Jira Task: Viet - research manual scraping techniques`
    - [Scrum-43](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-43)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-43-viet---research-manual-scraping)
  - `Jira Task: Viet - research existing databases`
    - [Scrum-44](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1?selectedIssue=SCRUM-44)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/branch/feature%2FSCRUM-44-viet---research-existing-databa)
<br />

**Jeff**: "provided users with a way to input, store, and see the ingredients they have in stock"
  - `Jira Task: Jeff - textboxes to enter ingredients (incld. amount and other details)`
    - [SRUM-59](https://cs3398f23klingons.atlassian.net/browse/SCRUM-59)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/feature/SCRUM-59-jeff---textboxes-to-enter-ingre)
  - `Jira Task: Jeff - save ingredient entries somewhere`
    - [SCRUM-60](https://cs3398f23klingons.atlassian.net/browse/SCRUM-60)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/feature/SCRUM-60-jeff--save-ingredient-entries-s)
  - `Jira Task: Jeff - research manual scraping techniques`
    - [SCRUM-64](https://cs3398f23klingons.atlassian.net/browse/SCRUM-64)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/SCRUM-64-jeff---research-manual-scraping)
  - `Jira Task: Jeff - show added ingredients`
    - [SCRUM-62](https://cs3398f23klingons.atlassian.net/browse/SCRUM-62)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/feature/SCRUM-62-jeff--show-added-ingredients)
  - `Jira Task: Jeff - add unit tests to make sure textboxes work correctly`
    - [SCRUM-61](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/feature/SCRUM-62-jeff--show-added-ingredients)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/%7B973a6ba3-a025-481e-a3dd-3e0bd88f694d%7D/branch/feature/SCRUM-61-jeff--add-unit-tests-to-make-su)
  - `Jira Task: Jeff - research scraping api`
    - [SCRUM-63](https://cs3398f23klingons.atlassian.net/browse/SCRUM-63)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/6a799319270ee8743fe799bdd6fb1c185f20c1b6)
  - `Jira Task: Jeff - existing databases`
    - [SCRUM-65](https://cs3398f23klingons.atlassian.net/browse/SCRUM-65)
    - [Bitbucket](https://bitbucket.org/cs3398f23klingons/recipes-repo/commits/01c42711ee386a4ca4688b141565d604841c8109)
<br />

#### Next Steps

**Brent**:
  - Reorganize application layout and add components to the NavBar
  - Create feature that lets users construct their own recipes from scratch
  - Add links to YouTube videos that offer tip and tutorials on how to cook difficult recipes
  - Fetch recipes from websites using REST APIs
  - Add images to recipes so our users can visualize what they're making
  - Construct database for storing user ingredients and the recipes they generate
<br />

**Viet**:
  - provide users with functionalities to create an account and log into the account
  - create the schema to store user data to the database
<br />

**Jeff**:

  -

## Reports

![Burnup Chart](https://cs3398f23klingons.atlassian.net/jira/software/projects/SCRUM/boards/1/reports/burnup)

## Screenshots

![Gordon Ramsay](https://i2-prod.dailyrecord.co.uk/incoming/article23157887.ece/ALTERNATES/s1200c/1_FOXs-Hells-Kitchen-Season-Fourteen.jpg)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

## Usage

How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`

## Project Status

Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.

## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:

- Improvement to be done 1
- Improvement to be done 2

To do:

- Feature to be added 1
- Feature to be added 2

## Acknowledgements

Give credit here.

- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...

## Contact

Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
