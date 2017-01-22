const source = require('vinyl-source-stream');
const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');

const reload = browserSync.reload;


/*
  Styles Task
*/

gulp.task('styles', () => {
  // move over fonts
  gulp.src('css/fonts/**.*')
    .pipe(gulp.dest('build/css/fonts'));

  // Compiles CSS
  gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({ stream: true }));
});

/*
  Images
*/
gulp.task('images', () => {
  gulp.src('css/images/**')
    .pipe(gulp.dest('./build/css/images'));
});

/*
  Browser Sync
*/
gulp.task('browser-sync', () => {
  browserSync({
    // we need to disable clicks and forms for when we test multiple rooms
    server: {},
    middleware: [historyApiFallback()],
    ghostMode: false,
  });
});

function handleErrors(...args) {
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>',
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  const props = {
    entries: [`./scripts/${file}`],
    debug: true,
    transform: [babelify.configure({ stage: 0 })],
  };

  // watchify() if watch requested, otherwise run browserify() once
  const bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    const stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./build/'))
      // If you also want to uglify it
      // .pipe(buffer())
      // .pipe(uglify())
      // .pipe(rename('app.min.js'))
      // .pipe(gulp.dest('./build'))
      .pipe(reload({ stream: true }))
  }

  // listen for an update and run rebundle
  bundler.on('update', () => {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', () =>
  buildScript('main.js', false) // this will once run once because we set watch to false
);

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['images', 'styles', 'scripts', 'browser-sync'], () => {
  gulp.watch('css/**/*', ['styles']); // gulp watch for sass changes
  return buildScript('main.js', true); // browserify watch for JS changes
});
