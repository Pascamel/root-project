module.exports = {
  configFiles: {
    files: [ 'Gruntfile.js', 'tasks/options/*.js' ],
    options: {
      reload: true
    }
  },
  options: {
    livereload: true,
  },
  javascript: {
    files: ['src/**/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false
    }
  },
  css: {
    files: ['src/**/*.css'],
    tasks: ['concat', 'cssmin'],
    options: {
      spawn: false    
    }
  },
  images: {
    files: ['img/**/*.{png,jpg,gif}', 'img/*.{png,jpg,gif}'],
    //tasks: ['imagemin'],
    options: {
      spawn: false
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}