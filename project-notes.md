# eDreamTeam - Group Project 2 - codeFriend
## Project Notes
codeFriend will have 3 initial features; **inspirational quotes**, **humorous memes**, **coding challenges**. User will have the option to select a category and infinite scroll through all available content. User will be able to create an account, update a profile, and not be served duplicate content (unless approved by user setting).

### App Architecture
Initial structure created using `express-generator` modified to better fit the MVC pattern, incorporate `mocha` tests, and `sequelize-cli` for ORM and migration support. 

#### Folder Overview
* `bin` contains a single file, `www`, which functions as the http server
* `config` contains a single file, `config.json`, which holds database settings
* `controllers`
  * `index.js` handles routing for `/` and pulls in additional routes, handled in their own files. For example, `users.js` handles routes for `/users`
* `migrations` to be used for `sequelize-cli` migrations
* `models`
  * `db`
    * `data` contains multiple JSON files containing starter datasets for app
  * `index.js` which manages requests and pulls in individual files for each database model and its basic functions
* `public` contains all statically served, publically available files
  * `stylesheets`
* `seeders` to be used for sequelize seeder files
* `test` for mocha test scripts
* `views` contains all handlebars templates

## Project Timeline
### Saturday 3/18
    Brainstorm ideas, initial wireframe and notes, next steps: research & setup
### Tuesday 3/21
    Finalize architecture, pseudocode & assign features
### Thursday 3/23
    Feature coding, initial concerns/roadblocks
### Saturday 3/25
    Feature coding, (testing?)
### Tuesday 3/28
    User testing, final bug fixes, presentation preparation (60 minutes)
### Thursday 3/30
    Project presentation and demo (10 minutes)

## Project Requirements
* ~~Node.js~~
* ~~Express web server~~
* MySQL
* Sequelize ORM
* Handlebars
* Authentication
* GET and POST routes
* Heroku deployment
* New library/package/technology
* Polished UI
* ~~MVC pattern~~
* Coding best practices
* ~~Use existing public data~~
* Migration strategy

### Whiteboard
* Social Media
* Daily inspiration
* Question/prompt based feedback for deep dive
* User questionnaire; at account creation and checkup, use to direct path/suggestions
* Gamification; achievement levels, quizzes, ribbons/certs/badges
* Daily challenge on mobile
* Tech interview questions
* Authentication
* Funny meme picture
* Weekly challenge through reddit daily programmer