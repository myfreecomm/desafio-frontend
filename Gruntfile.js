module.exports = function(grunt) {
    
    "use strict"

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "src/js/*.js",
                tasks: "uglify"
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

        uglify: {
            dist: {
                files: {
                    "build/js/script.min.js": "src/js/script.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // grunt.registerTask("teste", ["watch", "uglify"]);
};