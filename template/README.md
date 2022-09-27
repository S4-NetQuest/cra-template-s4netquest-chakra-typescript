# CREATE REACT APP TEMPLATE
### cra-template-s4netquest-chakra-typescript
##### v0.1.0

Presented by:

<a href="https://s4netquest.com"><img src="https://s4-netquest.github.io/react-scorm-provider/images/s4-logo.png" alt="S4 NetQuest Logo" style="display: block; max-width: 250px;" /></a>

### About this template
This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure for Chakra-UI based projects with Typescript. Anyone is welcome to use this template, however it may be significantly changed at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * react-app-polyfill ( imported in index.js for 'stable' )
  * react-router-dom
  * env-cmd ( load different .env configurations per environment )
  * chakra-ui
  * framer-motion ( for animation )
  * react-helmet-async
  * react-icons
  * recoil
  * typescript
  * eslint and our preferred eslint config
* Custom NPM Scripts:
  * `build:stage` ( runs a production build using the 'staging' configuration in .env-cmdrc.json as environment variables )
  * `lint` ( run ESlint in the CLI )
* Features
  * Absolute imports from `/src` are enabled, relative imports are not necessary
  * ESLint with airbnb rules and other additional rules
  * Opinionated project directory structure

### Installing
1. `npx create-react-app PROJECT_NAME --template cra-template-s4netquest-chakra-typescript`
2. make sure to modify files in `/public`. At a minimum, do the following:
  - change the `short_name` and `name` fields in `manifest.json`
  - change the icon files (https://realfavicongenerator.net is a great tool for this)
3. begin working on your project!