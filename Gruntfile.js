module.exports = function(grunt) {
	
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat: {
            options: {
              separator: '',
              stripBanners: true,
              banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            dist: {
                src: ['cloudu/src/*.js'],
                dest: 'app/cloudu.js',
            },
        }
    });

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);

};
