# auto-amigo
Auto Amigo is your car friend

## Table of Contents

### Tech
To work with Auto Amigo, it will be helpful if you are familar with the following: 
- JavaScript
- AngularJS
- Node
- Express
- Webpack

### Getting Started
#### Local Machine
To get all the dependencies and devDependencies, in the terminal, use the command: 
```javascript
npm install
```

To create your initial bundle, use the command:
```javascript
npm run build
```

To start the app, use the command:
```javascript
npm start
```

There are multiple ways to keep working on the project. If you want webpack to watch your saves, you can use in one terminal:
```javascript
npm run bundle
```
And in another terminal: 
```javascript
npm start
```
#### Deployed
If you deploy on Heroku as I did, the ```postinstall``` script in the package.json takes care of bundling for you.

### Endpoints
- /gas - GET gas entries for a user or POST a gas entry for a user
- /login - Logs a user in. Starts a session
- /logout - Logs a user out. Destroys a session
- /user - GET users or POST users (not updated with rest of the code currently)
- /user/:id - GET specfic user, POST a specific user or DELETE a specific user (not updated with rest of the code currently)