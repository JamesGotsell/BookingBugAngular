//module.exports = function(grunt) {
//
//    grunt.initConfig({
//        jshint: {
//            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
//            options: {
//                globals: {
//                    jQuery: true
//                }
//            }
//        },
//        watch: {
//            files: ['<%= jshint.files %>'],
//            tasks: ['jshint']
//        },
//        karma: {
//            unit: {
//                configFile: 'karma.conf.js',
//                background: true,
//                singleRun: false,
//                files: ['tests/*.js']
//            }
//        },
//        mocha: {
//            all: {
//                src: ['tests/*.js'],
//            },
//            options: {
//                run: true
//            }
//        }
//    });
//
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks("grunt-karma");
//    grunt.loadNpmTasks('grunt-mocha');
//
//    grunt.registerTask('default', ['jshint', 'watch', "karma", 'mocha']);
//
//};

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'src/<%= pkg.name %>.js'
            },
            deps: {
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angularjs/angular.min.js',
                ],
                dest: 'src/<%= pkg.name %>-deps.js'
            },
            css: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'src/stylesheets/styles.css'
                ],
                dest: 'src/stylesheets/<%= pkg.name %>.css'
            },
            move: {
                src: ['bower_components/angularjs/angular.min.js.map'],
                dest: 'src/angular.min.js.map'
            }
        },

        sass: {
            dev: {
                files: {
                    'src/stylesheets/styles.css': 'src/stylesheets/scss/styles.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat:dist']
            },
            styles: {
                files: ['src/stylesheets/scss/*.scss'],
                tasks: ['sass']
            }
        }
    });

    //npm tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ngdocs');

    //tasks
    grunt.registerTask('default', ['build' ]);

    grunt.registerTask('build', 'Build the application', ['concat']);

    grunt.registerTask('watch', 'Build the application', ['watch' , 'sass']);
}