// Generated on 2013-10-19 using generator-angular 0.3.0
'use strict';

var logger = require('log4js').getLogger('Gruntfile');
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    logger.info('running build');
    if ( !!path ){
        logger.info('path is defined');
    }

//    var s3Config = {};
//    try {
//        var s3path = process.env.LERGO_S3 || path.resolve('./dev/s3.json');
//        logger.info('looking for s3.json at ' , s3path );
//        s3Config = require( s3path );
//    }catch(e){
//        logger.error('s3 json is undefined, you will not be able to upload to s3',e);
//    }

    grunt.initConfig({
//        s3:{
//            uploadCoverage: {
//                options: {
//                    accessKeyId: s3Config.accessKey,
//                    secretAccessKey: s3Config.secretAccessKey,
//                    bucket: s3Config.bucket,
//                    enableWeb:true,
//                    gzip:true
//                },
//                cwd: 'coverage/',
//                src: '**',
//                dest: 'ri-coverage/'
//
//            },
//            uploadBuildStatus: {
//                options: {
//                    accessKeyId: s3Config.accessKey,
//                    secretAccessKey: s3Config.secretAccessKey,
//                    bucket: s3Config.bucket,
//                    enableWeb:true,
//                    gzip:true
//                },
//                cwd: 'buildstatus/',
//                src: '**'
//            }
//        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'xunit',
                    captureFile: 'results.xml'
                },
                src: ['src/tests/sanity/**/*.js']
            }

        },
        /*jshint camelcase: false */
        mocha_istanbul: {
            coverage: {
                'src' : 'src/tests/sanity',
                'options' : {
                    'mask' : '*.spec.js',
                    'reportFormats' : ['cobertura','junit']
                }
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            backend: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    'src': [
                        'Gruntfile.js',
                        'server.js',
                        '*.js',
                        'backend/**/*.js',
                        '!backend/dataUpgrades/**/*.js'
                    ]
                }
            }

        }
    });


    grunt.registerTask('build', [
        'jshint',
        'test'
    ]);


    grunt.registerTask('test', [
//        'mocha_istanbul',
        'mochaTest',
        'cleanXunitFile'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);


    var outputFile = process.env.MOCHA_OUTPUT_FILE || 'results.xml';
    grunt.registerTask('cleanXunitFile', 'Remove Selenium/WebDriver output from xunit file', function() {
        if (grunt.file.exists('./' + outputFile)) {
            var file = grunt.file.read('./' + outputFile);
            if (file.indexOf('<testsuite')) {
                grunt.file.write('./' + outputFile, file.substring(file.indexOf('<testsuite')));
            }
        }
        else {
            grunt.log.error('"cleanXunitFile" task was specified but file ' + outputFile + ' does not exist.');
        }
    });
};
