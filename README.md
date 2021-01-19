# The version of Ecommerce-project ready for deploy to Heroku

## Basis

Express server serves React application itself and API.

## CSS

In this project I decided to use TailwindCSS.

## DataBase

Database is realised via db.json for now, and I am planning to change JSON file to MongoDB soon.

---

## Structure

In the root folder lies express server. In the pulbic folder we can see images, and the private one contains all the
JSONs, privateAPI and dataLAyer which provide communication between the server and the files. In the client folder we
have React application.

## How it all works?

When deployed package.json of server has an npm 'heroku-postbuild' script, which sends us to the react folder, installs
all dependencies and starts the biuld process.

## Visiting a site

When you enter the site heroku starts the server, which by deafult would send you html file from react build folder.
