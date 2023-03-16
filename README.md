<div align="center">
  <h1>Dinomite Designs</h1>
  <p>A complete redesign of a retail portal</p>
</div>

## Tech Stack
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
</div>

## Primary Features

## Installation:

### Install Dependencies
- run the command `npm install` in the project root.

### Setup environment variables
- create a local file `.env` using `example.env` as a template.
  - `.env` is listed in the `.gitignore` file and thus will not be added to Git's source control
  - populate this new `.env` file with the required values for your local machine

### Setup an automatic ESLint pre-commit hook
- from the project root, run a script with the command `./dev/set-up-hooks.sh`

## Running the Client and Server:
- in two separate terminals, run the following commands:
  - `npm run server-dev`
  - `npm run client-dev`

You should now be able to access the client application at the location you set for your server `.env` file.

## Running ESLint:
- if using VSCode, make sure the settings file in this repo is being seen and used
- you may manually run ESLint with the command `npm run eslint-dev` in the project root
- to specifically ignore ESLint's opinion about a given line, add the comment `// eslint-disable-line`
  - EG `const forFutureUse = require('package-name'); // esline-disable-line`
- when you commit code locally, ESLint will automatically check your code and may prevent the commit
- you may intentionally override this with the flag `--no-verify`
  - EG `git commit --no-verify`

## Running Tests:
- the command `npm test` will run all tests locally
- to run tests and also ouput total coverage, use the command `npm run test-coverage`
  - any file here that matches the pattern `*.{js/jsx}` will be considered for coverage
  - this will both print to screen, and produce a pretty HTML report in `./coverage`
