module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    ngdocs: {
      options: {
		dest: 'release/docs',
		title:'DIST UI组件库',
		startPage:'/api/dist.reference',
        scripts: ['angular.js', 'release/dist-ui-com-all-1.0.0.min.js'],
        html5Mode: false,
      },
	  api:{
		  src:['src/**/*.js','!src/**/*.spec.js','index.ngdoc'],
		  title:'API文档'
	  },  
    }
  });
  grunt.registerTask('default', ['ngdocs']);

};
