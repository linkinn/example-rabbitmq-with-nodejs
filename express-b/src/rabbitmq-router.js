const { json } = require('express')
const express = require('express')

const RabbitmqServer = require('./rabbitmq-server')

const router = express.Router()

router.post('/express-b', async (req, res) => {
  console.log(req.body)
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
  await server.start()
  await server.publishInQueue('express-a', JSON.stringify(req.body))
  // await server.publishInExchange('amq.direct', 'rota', JSON.stringify(req.body))
  console.log('aqui')
  return res.status(200).json({msg: 'ok'})
})

module.exports = router