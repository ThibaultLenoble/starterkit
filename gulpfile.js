const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// SASS
function scssTask(){
    return src('assets/scss/app.scss', {sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([cssnano]))
        .pipe(dest('public/assets/css', {sourcemaps: '.'}))
}

// JAVASCRIPT
function jsTask(){
    return src('assets/js/app.js', {sourcemaps: true})
        .pipe(terser())
        .pipe(dest('public/assets/js', {sourcemaps: '.'}))
}

// Browser-sync
function browserSyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browserSyncReload(cb){
    browsersync.reload();
    cb();
}

// Watch
function watchTask(){
    watch('*.html', browserSyncReload)
    watch(['assets/scss/**/*.scss', 'assets/js/**/*.js'], series(scssTask, jsTask, browserSyncReload))
}

// Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
)
