module.exports = function(grunt) {
    grunt.initConfig({
        //configuração das tasks

        uglify: {
            'build/js/script.min.js': 'scr/js/script.js'
        },

        sass: {
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
          },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
}