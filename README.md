<br/>
<p align="center">
  <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Flashcard Study Tool</h3>

  <p align="center">
    Study on the go, with an easy to use flashcard deck manager. Ace those tests from you desktop or your pocket!
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack">View Demo</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/issues">Report Bug</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/total) ![Contributors](https://img.shields.io/github/contributors/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack?color=dark-green) ![Issues](https://img.shields.io/github/issues/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack) ![License](https://img.shields.io/github/license/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://flashcards-frontend-uyqj.onrender.com)

You can view a deployed version of this app at: https://flashcards-frontend-uyqj.onrender.com

Note: Render can take a minute to show relevant information retrieved from the DB. This is a common issue with deployment on Render, but rest assured that the app is functioning and does indeed work properly. If all else fails, try either refreshing the page, or loading in from a new window.

This Full-Stack application allows a user to create a deck of study cards, and edit or delete them as the user sees fit. It prompts the user with a confirmation window upon selecting to either delete a deck, or once finished with a study session you can start over or go back to the home page. The front page displays a list of decks, from which you can view, edit or delete the cards of a deck once selected. It 

It utilizes a RESTful API and a Non-Relational Database (MongoDB) to retrieve information (all made from scratch). The Database has two collections: Decks and Cards. Making a delete/update request to one, will make changes within the other if necessary. It uses the Object_Id() property to actively query related cards and decks as a group.

Any CRUD operation that is not allowed on a certain API endpoint will be met with a "Method not allowed" error message and a status of 405.

## Built With

Front-End Technologies Used:
- HTML/CSS/JavaScript
- React.js
- React-Router-Dom
- Bootstrap (style)

Back-End Technologies Used:
- MongoDB (Non-Relational Database)
- Express.js (RESTful API development)
- Knex.js (database querying)
- Cors
- dotenv
- nodemon (server used for development)

## Getting Started

To get started locally, you can fork the repo or download the .zip (be sure to extract it!) as normal, then after you use the command line to cd your way into the directory. After doing so, a simple "npm i" is more than enough to get the project up and running. 

To run the front-end, just enter "npm run start:react"
to run the back-end, just use "npm run start:dev"

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install NPM packages

```sh
npm install
```

## Usage

The purpose of this application was to take a front-end application created during my time at an Engineering Immersion bootcamp, and revisit it using new skills I obtained during continued education post-graduation. I wanted to get to use MongoDB due to it's popularity and it quickly grew on me. My friend and cohort Keith and I built a RESTful API together and learned how to use MongoDB in order to rebuild this project. After revisiting the project, there are still some changes I would like to make, but overall it came out very well. I also plan on using this myself during my AWS study sessions for review before my certification. 

## Roadmap

See the [open issues](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/Flashcard-App-Fullstack/blob/main/LICENSE.md) for more information.

## Authors

* **Pierce DeAnda** - *Full-Stack Engineer* - [Pierce DeAnda](https://github.com/NewDevOnTheBlock/) - *Primary Contributor and Programmer*

## Acknowledgements

* [Pierce DeAnda](https://github.com/NewDevOnTheBlock/)
* [Keith Van](https://nvious7-portfolio.netlify.app/)
* [PostgreSQL docs](https://www.postgresql.org/)
* [React Docs](https://legacy.reactjs.org/docs/getting-started.html)
