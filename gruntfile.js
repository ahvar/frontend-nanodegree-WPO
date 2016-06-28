/*
 * grunt-config-minify
 * Licensed under ISC
 */
'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			dist: {
				cwd: 'src/',
				expand: true,
				src: '**',
				dest: 'dist/'
			}
		},

		inline: {
			dist: {
				options: {
					inlineTagAttributes: {
						js: 'data-inline="true"',
						css: 'data-inline="true"'
					},
					cssmin: true,
					uglify: true
				},
				src: 'src/index.html',
				dest: 'dist/index.html'
			}
		},

		htmlmin: {
			options: {
				removecomments: true,
				collapseWhitespace: true
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: ['*.html'],
						dest: 'dist/'
					}
				]
			}
		},

		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3,
					progressive: true
				},
			files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default',['copy','inline','htmlmin','imagemin']);

};
