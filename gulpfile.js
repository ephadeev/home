'use strict';

const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();
const media = require('gulp-group-css-media-queries');
const imageMin = require('gulp-imagemin');

function clear() {
    return del(['./docs/'])
}

function icons() {
    return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(dest('./docs/webfonts/'));
}

function fonts() {
    return src('src/fonts/*')
        .pipe(dest('docs/webfonts/'));
}

function js() {
    return src('src/script.js')
        .pipe(dest('docs/'));
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(media())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('docs/css/'))
}

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('docs/'))
}

function images() {
    return src('src/img/**.jpg')
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        }))
        .pipe(dest('docs/img/'))
}

function serve() {
    sync.init({
        server: './docs/'
    });

    watch('src/**.html', series(html)).on('change', sync.reload);
    watch('src/scss/**.scss', series(scss)).on('change', sync.reload);
    watch('src/img/**.png', series(images)).on('change', sync.reload);
    watch('src/**.js', series(js)).on('change', sync.reload);
}

exports.build = series(clear, icons, fonts, js, scss, html, images);
exports.serve = series(clear, icons, fonts, js, scss, html, images, serve);
exports.clear = clear;