module.exports = {
    dist: {
        src: [
            'src/common.js',
            'src/core/**/*.js',
            'src/**/*.js'
        ],
        dest: 'dist/sc.js'
    },
    styles: {
        src: [
            'src/common.css',
            'src/**/*.css'
        ],
        dest: 'dist/sc.css'
    }
}