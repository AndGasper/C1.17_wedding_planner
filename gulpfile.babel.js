import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';

const paths = {
  js: ['./server/**/*.js', './server/*.js'],
  destination: './app'
};

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});

// gulp task build to run gulp clean, gulp babel, gulp restart
gulp.task('build', cb => {
  run('clean', 'babel', 'restart', cb);
});

// Uses rimraf to delete app directory
gulp.task('clean', cb => {
  rimraf(paths.destination, cb);
});

let express;

gulp.task('server', () => {
  express = server.new(paths.destination);
});
