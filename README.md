## Electron React boilerplate based on [this][ref1] and [that][ref2] 🤣

### It supports electron live-reload 🎉 

# Install


First, clone the repo:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/subhamayd2/electron-react-live-reload <your-project-name>
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

# Starting Development
To start development:
```bash
npm run start
```

To start with live-reload:
```bash
npm run serve
```

# Building
```bash
npm run electron-build
```

# Available scripts
`react-start` : start react development server

`react-build` : build react project
    
`react-test` : run react test suite
    
`react-eject` : eject this react project ⛔ (Cannot undo this). [Learn more][react eject]
    
`build` : build your application for release

`start` : start your application
    
`server` : start your application with live-reload

## License

MIT © [Electron React Live Reload][license]
    

[ref1]: https://medium.com/@johndyer24/building-a-production-electron-create-react-app-application-with-shared-code-using-electron-builder-c1f70f0e2649
[ref2]: https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
[react eject]: https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md#npm-run-eject
[license]: https://github.com/subhamayd2/electron-react-live-reload/blob/master/LICENSE
