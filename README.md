# Project Atelier:
A complete redesign of a retail portal.

# Installation:
- run the command `npm install` in the project root.
- create a local file `.env` using `example.env` as a template.
  - It is listed in the `.gitignore` file and thus will not be added to Git's source control
  - Populate this new `.env` file with the required values for your local machine

# Running the Client and Server:
- In two separate terminals, run the following commands:
  - `npm run server-dev`
  - `npm run client-dev`
You should now be able to access the client application at the location you set for your server `.env` file.

# Running ESLint
- In the project root run the command `npx eslint .` to show all current errors and warnings
- To specifically dignore ESLint's opinion about a given line, add the comment `// eslint-disable-line`
  - EG `const forFutureUse = require('package-name'); // esline-disable-line`
