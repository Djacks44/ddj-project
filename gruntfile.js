// module.exports = function(grunt) {

//   grunt.initConfig ({
//     sass: {
//       dist: {
//         files: {
//           'public/stylesheets/style.css' : 'sass/style.scss'
//         }
//       }
//     },
// watch: {
//   source: {
//     files: ['sass/**/*.scss'],
//     tasks: ['sass'],
//     options: {
//       livereload: true, // needed to run LiveReload
//     }
//   }
// }

//   grunt.loadNpmTasks('grunt-sass');
//   grunt.registerTask('default', ['sass']);
// };

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        },
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.ejs'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};