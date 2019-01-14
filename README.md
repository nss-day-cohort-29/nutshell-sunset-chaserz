# Nutshell: The Information Dashboard
## Team Sunset Chaserz
### Allison Collins
### Zac Crawford
### Hannah Neal
### Grady Robbins

# Setup : how another person can download and run the application
-[]Clone this repository
-[]npm install
-[]npm start
-[]In a new command line window, cd src/lib , "grunt"
-[]copy/paste all data from starterdatabase.json ==> database.json (establishes valid endpoints)
-[]spin up json server
-[]spin up http server



Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.


## Professional Requirements

1. All teammates must be using Grunt to run ESLint and Browserify during development
2. Each module should have a comment at the top with the following info: author(s) and purpose of module
3. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to session storage.

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
```

## Visual Feature List

To help you along, here is a visualization of the features, and behaviors of the application to get you started.

![nutshell features](./Nutshell.png)
