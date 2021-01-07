const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const RabbitmqServer = require('./rabbitmq-server')
const CreateModel = require('./utils/createModel')

const app = express();

mongoose.connect("mongodb://localhost:27017/b", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

const consume = async () => {
    const server = new RabbitmqServer('amqp://admin:admin@localhost:5672')
    await server.start()
    await server.consume('express-b', async (message) => {
      const consumeJson = JSON.parse(message.content.toString())
      const {model, data} =  consumeJson
      const response = await CreateModel.execute(model, data)
      console.log(response)
    })
}
  
consume()

app.listen(3332);