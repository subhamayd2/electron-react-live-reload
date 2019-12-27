const electron = require('electron');

const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const { client } = require('electron-connect');

require('./ipcEvents');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 900,
    height: 680,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../index.html')}`,
  );
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.on('ready-to-show', () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();

      if (isDev) {
        client.create(mainWindow, {
          sendBounds: false,
        });
      }
    }
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
