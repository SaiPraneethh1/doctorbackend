const jsonServer=require("json-server");
//Importing 1son server library
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middlewares=jsonServer.defaults();
const port=process.env.PORT || 5000; // chose port from here like 8000, 3001

server.use(middlewares); 
server.use(router);

server.listen(port);