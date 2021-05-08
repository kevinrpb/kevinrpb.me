const cleanOptions = {
  build: ['build/*']
}

const copyOptions = {
  build: {
    files: [
      {
        expand: true,
        cwd: 'src',
        src: '*',
        dest: 'build/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'src/assets/kweb/img/',
        src: '*',
        dest: 'build/img/',
        filter: 'isFile'
      }
    ]
  }
}

const sassOptions = {
  build: {
    options: {
      style: 'expanded'
    },
    files: [
      {
        expand: true,
        cwd: 'src/assets/kweb/css/',
        src: 'home.scss',
        dest: 'build/',
        ext: '.css'
      }
    ]
  }
}

const concatOptions = {
  options: {},
  build: {
    src: [
      'src/assets/kweb/js/util/mailobfuscator.js',
      'src/assets/kweb/js/particles/util.js',
      'src/assets/kweb/js/particles/stars.js',
      'src/assets/kweb/js/pages/home.js'
    ],
    dest: 'build/scripts.js'
  }
}

module.exports = function(grunt) {
  grunt.initConfig({
    clean: cleanOptions,
    copy: copyOptions,
    sass: sassOptions,
    concat: concatOptions
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-concat')
  // grunt.loadNpmTasks('grunt-contrib-watch')
  // grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('default', ['clean', 'copy', 'sass', 'concat'])
}
