import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from './electron_shared/constants';

const { ipcRenderer } = window;

function App() {
  const [appInfo, setAppInfo] = useState({
    appName: '',
    appVersion: '',
  });
  if (appInfo.appName === '' && appInfo.appVersion === '') {
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      setAppInfo({ appName, appVersion });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit&nbsp;
          <code>src/App.js</code>
          &nbsp;and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>{`${appInfo.appName} | ${appInfo.appVersion}`}</h4>
      </header>
    </div>
  );
}

export default App;
