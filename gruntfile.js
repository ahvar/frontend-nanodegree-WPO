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

		concat: {
			basic: {
				src: ['src/css/style.css'],
				dest: 'dist/css/style.css',
			}
		},

		inline: {
			dist: {
				options: {
					cssmin: true,
					uglify: true,
					tag: '_inline'
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

		mincss: {
			compress: {
				files: {
					'dist/css/style.css': ['src/css/style.css']
				}
			}
		},

		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{	
						width: 100,
						upscale: true,
						quality: 60
					}]
				},
				files: [{
					expand: true,
					src: ['pizzeria.jpg'],
					cwd: 'src/views/images/',
					dest: 'dist/views/images/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default',['copy','concat','inline','htmlmin','imagemin']);
};
