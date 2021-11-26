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
        cwd: 'src/wishlist',
        src: '*',
        dest: 'build/wishlist/',
        filter: 'isFile'
      },
      {
        expand: true,
        cwd: 'src/assets/img/',
        src: '**',
        dest: 'build/img/',
        filter: 'isFile'
      }
    ]
  }
}

const sassOptions = {
  build: {
    options: {
      style: 'expanded',
      sourceMap: false
    },
    files: [
      {
        expand: true,
        cwd: 'src/assets/',
        src: 'styles.scss',
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
      'src/assets/js/util/*.js',
      'src/assets/js/particles/*.js',
      'src/assets/js/main.js',
      'src/assets/scripts.js'
    ],
    dest: 'build/scripts.js'
  }
}

const connectOptions = {
  serve: {
    options: {
      base: 'build',
      hostname: 'localhost',
      port: 8080,
      livereload: true
    }
  }
}

const watchOptions = {
  serve: {
    options: {
      livereload: 35729,
    },
    files: 'src/**/*',
    tasks: 'default',
  }
}

module.exports = function(grunt) {
  grunt.initConfig({
    clean: cleanOptions,
    copy: copyOptions,
    // sass: sassOptions,
    'dart-sass': sassOptions,
    concat: concatOptions,
    connect: connectOptions,
    watch: watchOptions
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  // grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-dart-sass')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['clean', 'copy', 'dart-sass', 'concat'])
  grunt.registerTask('serve', ['default', 'connect', 'watch'])
}
