module.exports = function (grunt) {
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
				requireCurlyBraces: ['if', 'else', 'for', 'while', 'do', 'try', 'catch', 'case'],
				requireTrailingComma: false,
				requirePaddingNewLinesAfterBlocks: false,
				requireDollarBeforejQueryAssignment: false
			}
		}
	});

	grunt.registerTask('test', ['jshint', 'jscs']);
	grunt.registerTask('default', ['test']);
};
