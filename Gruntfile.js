// Gruntfile.js

// our wrapper function (required by grunt and its plugings)
// all configuration goes inside this function

// this is a wrapper function
// Node's way of exposing our config to the rest of our app
module.exports = function(grunt) {

  // CONFIGURE GRUNT
  grunt.initConfig({

    // get the config info from package.json
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure jshint to validate js files
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'public/scripts/*.js']
    },

    // compile less stylesheets to css
    less: {
      build: {
        files: [
          { 'public/styles/css/pretty.css' : 'public/styles/less/pretty.less' },
        ]
      }
    },

    // compile sass stylesheets to css
    sass: {
      dist: {
        files: {
          'public/styles/css/index.css' : 'public/styles/sass/index.scss'
        }
      }
    },

    // configure watch to auto update
    watch: {
      // for stylesheets, watch css and less files
      // only run less
      // files: ['public/styles/less/*.less', 'public/styles/sass/*.scss'],
      // tasks: ['less', 'sass'],
      css: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },

      // for scripts, run jshint
      scripts: {
        files: ['public/scripts/*.js'],
        tasks: ['jshint']
      }
    }
  });

  // LOAD GRUNT PLUGINS
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTER TASKS
  grunt.registerTask('default', ['jshint', 'watch', 'sass']); // default task
  grunt.registerTask('styles', ['less', 'sass']);
};
