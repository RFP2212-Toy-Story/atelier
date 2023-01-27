# Project Atelier:
A complete redesign of a retail portal.

# Installation:
- run the command `npm install` in the project root.
- create a local file `.env` using `example.env` as a template.
  - It is listed in the `.gitignore` file and thus will not be added to Git's source control
  - Populate this new `.env` file with the required values for your local machine
- from the project root, run the shell-script `./dev/set-up-hooks.sh`

# Running the Client and Server:
- In two separate terminals, run the following commands:
  - `npm run server-dev`
  - `npm run client-dev`
You should now be able to access the client application at the location you set for your server `.env` file.

# Running ESLint:
- you may run the command `npx eslint .` in the project root to show all current issues
- to specifically dignore ESLint's opinion about a given line, add the comment `// eslint-disable-line`
  - EG `const forFutureUse = require('package-name'); // esline-disable-line`
- when you commit code locally, ESLint will automatically check your code and may prevent the commit
  - you may intentionally override this with the command `git commit --no-verify`
