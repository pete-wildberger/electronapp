const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  console.log('App running');
  const MainWindow = new BrowserWindow({
    width: 300,
    height: 300
  });
  MainWindow.loadUrl(`file://${__dirname}/index.html`);
});
