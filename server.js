// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(process.env.PORT || 5000, () => {
//   console.log("JSON Server is running");
// });



const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Adjust the path to your JSON data file
const middlewares = jsonServer.defaults();

// Enable CORS
const cors = require('cors');
server.use(cors());

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
