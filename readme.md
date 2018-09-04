![Expense Tracker Log In Screen](/screenshots/expenseTracker1.jpg)
![Expense Tracker Home Dashboard](/screenshots/expenseTracker2.jpg)

# Expense Tracker
An app for people to be able to monitor their expenses.

## Motivation

I created this application as a deep dive into React with Redux. We really are [spoilt for choice](https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341) when it comes to frameworks for single page apps, so I wanted to take a popular choice and build a full-stack app that makes use of the features by which front-end frameworks are judged. This was also a great opportunity to explore Jest, Webpack, and Styled Components in more depth, tools that are also used frequently alongside React.

## Installation
1. Run `npm install`
2. Create two instances of the Firebase Database in the [Firebase Console](https://firebase.google.com/products/realtime-database/) - one for testing, and one for production.
3. You have the option of hardcoding the firebase configuration object in src/firebase/firebase.js (**highly discouraged**) or you can take advantage of the `dotenv` package as well as the current application structure and create `.env.development` and `.env.test` files to hold environment variables. 
4. Create an Auth provider in the Firebase authentication console to allow sign-in with Google accounts. 
5. Run `npm run start` from project's root directory to launch Express server, or `npm run build:dev` for webpack-dev-server.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Deployment
A version of this project is [deployed to heroku](https://exp3nse-tracker.herokuapp.com/). 
To deploy your own version, you will need to first configure your own firebase instance (see above).

## Built With
* Node                           (Server)
* Express                        (Web Framework)
* Firebase Realtime Database     (Database)
* Firebase Authentication        (Authentication)
* React.js                       (Front-end Framework)
* Redux                          (State Management)
* Styled Components              (Styling)
* Jest + Enzyme                  (Testing)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.   
MIT © [Ilya Meerovich](http://www.ilyameerovich.com)