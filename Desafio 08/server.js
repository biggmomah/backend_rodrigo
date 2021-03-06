const express = require('express');
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const generateRandomProduct = require('./src/containers/FakerContainer')

const Container = require("./src/containers/Container");
const { optionsMySQL } = require("./src/utils/optionsMySQL");
const { optionsSQLite } = require("./src/utils/optionsSQLite");

const tableProducts = "products";
const tableMessages = "messages";

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const apiProducts = new Container(optionsMySQL, tableProducts);
const apiMessages = new Container(optionsSQLite, tableMessages);

const listProd = generateRandomProduct(5)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.get('/', (req, res) => {res.render('index');})
app.get('/api/productos-test', (req, res) => {res.render('fakeProd', {listProd: listProd});})

io.on("connection", async (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`);
    socket.emit("products", await apiProducts.listAll());
  
    socket.on("newProduct", async (product) => {
      await apiProducts.save(product);
  
      io.sockets.emit("products", await apiProducts.listAll());
    });
  
    socket.emit("messages", await apiMessages.listAll());
  
    socket.on("newMessage", async (msg) => {
      msg.date = new Date().toLocaleString();
      await apiMessages.save(msg);
  
      io.sockets.emit("messages", await apiMessages.listAll());
    });
});



const PORT = 8080;

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchado en puerto http://localhost:${server.address().port}`);
});

server.on("error", (error) => console.error(`Error en servidor ${error}`));