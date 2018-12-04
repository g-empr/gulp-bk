/*
|---------------------
| TASKS/SASS
|---------------------
*/
const $ = require('../plugin');
const config = require('../config').sass;

$.gulp.task('sass', () => {
    return $.gulp.src([config.input, config.reject], {
            base: 'src'
        })
        .pipe($.plumber({
            errorHandler: $.notify.onError(config.opt.plumber)
        }))
        .pipe($.sassGlob())
        .pipe($.sass({
            outputStyle: 'compressed'
        }))
        .pipe($.csscomb())
        .pipe($.autoprefixer(['last 3 versions', 'Firefox >= 20', 'ie >= 9', 'Android >= 4', 'iOS >= 9']))
        .pipe($.gcmq())
        .pipe($.replace(/@charset "UTF-8";/g, ''))
        .pipe($.header('@charset "UTF-8";\n\n'))
        .pipe($.rename(function (path) {
            path.dirname = path.dirname.replace('scss', 'css');
        }))
        .pipe($.gulp.dest(config.dest))
});