module.exports = function (grunt) {
    grunt.initConfig({
        //configuração das tasks

        uglify: {

            //destino                  origem
            'build/js/script.min.js': 'src/js/script.js'
        },

        sass: {

            //destino                  origem
            'build/css/style.css': 'src/scss/estilo.scss'
        },

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: '**/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
}