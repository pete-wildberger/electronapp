const { app, BrowserWindow } = require('electron');

let MainWindow = null;
app.on('ready', () => {
  console.log('App running');
  MainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    show: false
  });
  MainWindow.once('ready-to-show', () => {
    MainWindow.show();
  });
  MainWindow.on('closed', () => {
    MainWindow = null;
  });
  MainWindow.loadURL(`file://${__dirname}/index.html`);
});
