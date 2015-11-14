# ylc-website #

* Quick summary
The revamped YLC website utilizing the MEAN stack. Before, it was a simple Wordpress site that was not responsive. This design will integrate the new responsive capabilities using Bootstrap and an updated UI for a better UX with the students and community.

* 0.0.1

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up

<code>
console.log("This is a test of the <code> tag.");
</code>

* Configuration

-Source code is stored and tracked on GitHub @ ____ (Git)
-Hosted and deployed on Heroku @ ylc-webste.herokuapp.com (Node.js)
-Database hosted on MongoLab server (MongoDB)

<pre>
  console.log("This is a test of the <pre> tag.");
</pre>

Heroku (Node Web Server)
URL: ylc-website.herokuapp.com

* Dependencies

-jQuery
-

* Database configuration

MongoLab (Mongoose Database)
URI: mongodb://<dbuser>:<dbpassword>@ds053954.mongolab.com:53954/ylc-website

For username and password, see the "Passwords" Google Sheet on the admin@ylc.net account

* How to run tests

Jshint tests are automatically run with every file change thanks to Grunt and its watch/build functionality. These tests lint the code in order to verify proper JS syntax, along with an automatic build for converting SASS to CSS.

* Deployment instructions

The project is hosted on Heroku and is deployed with the following command:
<code>
git push heroku master
</code>

Where "heroku" is the git remote URL that points to the Heroku server, and "master" is your local code branch

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
