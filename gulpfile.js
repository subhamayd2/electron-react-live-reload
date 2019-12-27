
const gulp = require('gulp');
const electron = require('electron-connect').server.create({
  stopOnClose: true,
  useGlobalElectron: true,
});

gulp.task('serve', () => {
  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('./electron/*.*', electron.restart);
});
