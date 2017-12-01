const gulp = require('gulp');
const webserver = require('gulp-webserver');


gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            open: true,
            callback: "index.html",
            livereload: true
        }))
})



gulp.task('default', function () {
    gulp.start('webserver');
})