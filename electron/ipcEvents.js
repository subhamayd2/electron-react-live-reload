const { app, ipcMain } = require('electron');
const { channels } = require('../src/electron_shared/constants');

const getAppInfo = () => ipcMain.on(channels.APP_INFO, (event) => {
  event.sender.send(channels.APP_INFO, {
    appName: app.name,
    appVersion: `${app.getVersion()}`,
  });
});

module.exports = {
  ...getAppInfo(),
};
