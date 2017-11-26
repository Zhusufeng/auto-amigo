const app = require('./server/server.js');
const port = process.env.PORT || 8500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});