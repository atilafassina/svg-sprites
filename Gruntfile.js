module.exports = function(grunt) {

    var configs = {
        pkg: grunt.file.readJSON('package.json'),
        "svg-sprites": {
            options: {
                spriteElementPath: "single-svg",
                cssPath: ".tmp/css",
                prefix: ""
            },
            mainset: {
                options: {
                    spritePath: "sprites/mainset",
                    sizes: {
                        regular: 1,  // 8x8
                        png: 2,      // 16x16
                        bigPng: 4    // 32x32
                    },
                    refSize: 1,
                    unit: 1
                },
            }
        },
        sass: {
            mainset: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/mainset.css': 'generator/index.scss'
                }
            }
        },
        "clean":[
            ".tmp"
        ]
    }

    grunt.initConfig(configs);
    grunt.loadNpmTasks('grunt-dr-svg-sprites');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // tasks
    grunt.registerTask('default', ['svg-sprites', 'clean']);
    grunt.registerTask('oocss', ['svg-sprites', 'sass', 'clean']);
    grunt.registerTask('dev', ['svg-sprites']);
};