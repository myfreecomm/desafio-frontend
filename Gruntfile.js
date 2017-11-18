module.exports = function(grunt) {
    
    "use strict"

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "src/js/*.js",
            },
            sass: {
                files: "src/scss/*.scss",
                tasks: "sass"
            },
            html: {
                files: "**/*.html"
            }
        },

        sass: {
            dist: {
                files: {
                    "build/css/style.css": "src/scss/estilo.scss"
                }
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("teste", ["watch"]);
};