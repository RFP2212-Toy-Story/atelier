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
### Product Overview
Created By: [August Beck](https://github.com/AedonGrunGott)

![products-readme-one](https://user-images.githubusercontent.com/16231955/225773177-bec7ef7f-d9c9-423f-9d1e-d345aae84b2d.gif | width=400)
![products-readme-two](https://user-images.githubusercontent.com/16231955/225773275-8af5aa70-e1d6-4d6b-8d86-85fbf763b5f4.gif | width=400)

### Related Products
Created By: [Archaa Shrivastav](https://github.com/avinashi10)

### Saved Products
Created By: [Archaa Shrivastav](https://github.com/avinashi10)

### Questions & Answers
Created By: [Brett Eastman](https://github.com/BrettEastman)

### Ratings & Reviews
Created By: [Aimee Kang](https://github.com/aimeekang)

## Installation

### Install Dependencies
- run the command `npm install` in the project root.

### Setup environment variables
- create a local file `.env` using `example.env` as a template.
  - `.env` is listed in the `.gitignore` file and thus will not be added to Git's source control
  - populate this new `.env` file with the required values for your local machine

### Setup an automatic ESLint pre-commit hook
- from the project root, run a script with the command `./dev/set-up-hooks.sh`

## Running the Client and Server
- in two separate terminals, run the following commands:
  - `npm run server-dev`
  - `npm run client-dev`

You should now be able to access the client application at the location you set for your server `.env` file.

## Running Tests
- the command `npm test` will run all tests locally
- to run tests and also ouput total coverage, use the command `npm run test-coverage`
  - any file here that matches the pattern `*.{js/jsx}` will be considered for coverage
  - this will both print to screen, and produce a pretty HTML report in `./coverage`
