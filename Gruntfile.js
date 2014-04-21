(function () {

    'use strict';

    module.exports = function (grunt) {

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            sass: {
                dist: {
                    options: {
                        'style': 'compressed'
                    },
                    files: {
                        'css/main.min.css': 'scss/main.scss'
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-sass');

        grunt.registerTask('default', ['sass']);

    };

}());
