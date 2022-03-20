const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const config = require('../webpack.dev');

const server = new DevServer(webpack(config), {});
server.listen(8080, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
