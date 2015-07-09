module.exports = {
  dist: {
    src: [
      'src/libs/*.js',
      'src/**/*.js',
      'src/global.js'
    ],
    dest: 'dist/sc.js'
  },
  styles: {
  	src: [
      'src/libs/*.css',
      'src/**/*.css',
      'src/global.css'
  	],
  	dest: 'dist/sc.css'	
  }
}