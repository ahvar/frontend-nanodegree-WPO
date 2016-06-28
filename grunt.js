/*
 * grunt-config-minify
 * Licensed under ISC
 */
'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			dist: {
				cwd: ['css/','img/','js/','views/'],
				expand: true,
				src: '**',
				dest: 'dist/'
			}
		}

		imagemin: {
			jpg: {
				options: {
					progressive: true
				},
			files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.jpg'],
					dest: 'dest/'
				}]
			}
		}
	});

	grunt.loadNPMTasks('grunt-contrib-imagemin');
};
