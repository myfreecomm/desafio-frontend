module.exports = function(grunt) {
    
        "use strict"
    
        // Configuração das tarefas
        grunt.initConfig({
            // assiste as alterações feitas nos arquivos
            watch: {
                options: {
                    livereload: true // recarrega o browser 
                },
                js: {
                    files: "src/js/*.js", // tipos de arquivos
                },
                sass: {
                    files: "src/scss/*.scss",
                    tasks: "sass" // chama a task sass
                },
                html: {
                    files: "src/*.html"
                }
            },
            // configs do servidor no qual o browser vai acessar o site
            connect: {
                server: {
                    options: {
                        port: 9000,
                        base: "src/",
                        hostname: "localhost",
                        livereload: true,
                        open: true
                    }
                }
            },
            // configs do sass
            sass: {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        "src/css/style.css": "src/scss/style.scss"
                    }
                }
            },
            // copia os arquivos do diretorio 'src' para 'dist' (poderiam ser qlq nome. tem gente que usa dev e prod)
            copy: {
                public: {
                  expand: true,
                  cwd: "src",
                  src: "**",
                  dest: "dist"
                }
            },
            // apaga os arquivos do diretorio de 'dist' (antes de receber os novos arquivos vindo de dev)       
            clean: {
                 dist: {
                     src: "dist"
                 }
            },
       
            useminPrepare: {
              html: "dist/*/.html"
            },
            // substitui os arquivos minificados no html
            usemin: {
              html: "dist/*/.html"
            },
            // comprime as imagens
            imagemin: {
                public: {
                  expand: true,
                  cwd: 'dist/img',
                  src: '*/.{png,jpg,gif}',
                  dest: 'dist/img'
                }
            }
        });

        // carrega as tasks instaladas no npm
        grunt.loadNpmTasks("grunt-contrib-watch");
        grunt.loadNpmTasks("grunt-contrib-connect");
        grunt.loadNpmTasks("grunt-sass");
        grunt.loadNpmTasks("grunt-contrib-copy"); 
        grunt.loadNpmTasks("grunt-contrib-clean");
        grunt.loadNpmTasks("grunt-contrib-concat");
        grunt.loadNpmTasks("grunt-contrib-uglify");
        grunt.loadNpmTasks("grunt-contrib-cssmin");
        grunt.loadNpmTasks("grunt-usemin"); 
        grunt.loadNpmTasks('grunt-contrib-imagemin');         
        
        // cadastra as tasks para que possam ser executadas. exemplo:
        // no terminal vc pode executar: grunt live e o grunt vai rodar a task live que por sua vez contem as tasks connect e watch
        grunt.registerTask("live", [ "connect", "watch" ]);
        grunt.registerTask("dist", ["clean", "copy"]);
        grunt.registerTask("mini", ["useminPrepare",  "uglify", "cssmin", "usemin", 'imagemin']);
        grunt.registerTask("prod", ["dist", "mini", "live"]);

    };