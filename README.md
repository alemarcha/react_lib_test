##Development
- change main in package.json to src/index.js
- in the root app we install this library with npm install path/to/hellolibalemarcha and we can use it from local
- If we use it from local repository we can not launch we from docker-compose in root app. We need to launch root app with npm start.

##Production
- change main in package.json to dist/bundle.js
- updgrade version package.json
- npm publish
- in the root app we install this library with npm install hellolibalemarcha and we can use it from node_modules.
 