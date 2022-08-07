/** @format */

const jsonServer = require("json-server");
const server = jsonServer.create(); // create json-server
const router = jsonServer.router("users.json"); // put in the file
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8300; // default port or 8300

server.use(middleware); // the defaults
server.use(router); // the file created

server.listen(port); // listen to the port
