module.exports = {
  /**
     * **Channels** are basically event ID (or event type) when communicating with electron
     * ```javascript
     * app.on(LOAD, callback)
     * ```
     * **LOAD** is a channel
     */
  channels: {
    APP_INFO: 'app_info',
  },
};
