# This repo is now deprecated in favor of [this one](https://github.com/thechori/ylc)
You can view the new site [here](http://www.ylc.net)

# ylc-website #

## Quick summary ##

The revamped YLC website utilizing the MEAN stack. Before, it was a simple Wordpress site that was not responsive. This design will integrate the new responsive capabilities using Bootstrap and an updated UI for a better UX with the students and community.

### Installation

- Grab the code
```
$ git clone git@github.com:thechori/ylc-website.git
```

- Open the newly created directory
```
$ cd ylc-website
```

- Run the NPM install 
```
$ npm install
```

- Spin up the PHP server and serve the files 
```
$ php -S localhost:3000
```

- Open your browser of choice and navigate to http://localhost:3000

## Configuration

+ Hosted and deployed on Heroku @ ylc-webste.herokuapp.com (Node.js)
+ Database hosted on MongoLab server (MongoDB)

Heroku (Node Web Server)
URL: ylc-website.herokuapp.com

* Dependencies
- jQuery
- Bootstrap

* Database configuration

MongoLab (Mongoose Database)
URI: mongodb://<dbuser>:<dbpassword>@ds053954.mongolab.com:53954/ylc-website

For username and password, see the "Passwords" Google Sheet on the admin@ylc.net account

* How to run tests

Jshint tests are automatically run with every file change thanks to Grunt and its watch/build functionality. These tests lint the code in order to verify proper JS syntax, along with an automatic build for converting SASS to CSS.

* Deployment instructions

The project is hosted on Heroku and is deployed with the following command:

```
git push heroku master
```

Where "heroku" is the git remote URL that points to the Heroku server, and "master" is your local code branch


### Where do I go for help? ###

* Ryan Teodoro (admin@ylc.net or ryan.h.teodoro@gmail.com)
