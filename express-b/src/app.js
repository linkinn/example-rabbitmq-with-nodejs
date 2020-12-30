const express = require('express')

const RabbitmqServer = require('./rabbitmq-server')
const rabbitmqRoute = require('./rabbitmq-router')

const app = express()

app.use(express.json())

app.use('/', rabbitmqRoute)

const consume = async () => {
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
  await server.start()
  await server.consume('express-b', (message) => console.log(message.content.toString()))
}

consume()

app.listen(3000, () => {
  console.log('started')
})