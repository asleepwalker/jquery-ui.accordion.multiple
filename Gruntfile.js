module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'lib/*.js'],
			options: {
				jquery: true,
				globals: {
					console: true,
					module: true,
					document: true
				}
			}
		},
		jscs: {
			src: ['Gruntfile.js', 'lib/*.js'],
			options: {
				preset: 'airbnb',
				validateIndentation: '\t',
				disallowMultipleVarDecl: null,
				requireMultipleVarDecl: true,
				requireCurlyBraces: ['if', 'else', 'for', 'while', 'do', 'try', 'catch', 'case']
			}
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs']);
	grunt.registerTask('default', ['test']);
};
