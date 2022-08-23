const app = require('./src/app');
const config = require('./config');

app.listen(config.port, function () {
  console.log(`App is listening on port ${config.port}!`);
});