const gulp =  require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
 
gulp.task('babel', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('default', () => {
    // here 
});

gulp.task('views', (buildHTML) => {
    return gulp.src('views/**/*.pug')
    .pipe(pug({
        //options here
    }))
});

gulp.task('one', () => {
    return gulp.src('./css/one.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./css/build'));
  });
   
  // Options
  // Options compress
  gulp.task('compress', () => {
    return gulp.src('./css/compressed.styl')
      .pipe(stylus({
        compress: true
      }))
      .pipe(gulp.dest('./css/build'));
  });

 
gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        //configurações
        // .pipe(imagemin([
        //     imagemin.gifsicle({interlaced: true}),
        //     imagemin.jpegtran({progressive: true}),
        //     imagemin.optipng({optimizationLevel: 5}),
        //     imagemin.svgo({
        //         plugins: [
        //             {removeViewBox: true},
        //             {cleanupIDs: false}
        //         ]
        //     })
        // ]))
);