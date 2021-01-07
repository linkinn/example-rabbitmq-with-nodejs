const RabbitmqServer = require('../rabbitmq-server')

async function sendRabbit(nameModel, resultModel) {
    const server = new RabbitmqServer('amqp://admin:admin@localhost:5672')

    rabbitMsg = {
        model: nameModel,
        data: resultModel
    }
    await server.start()
    await server.publishInQueue('express-a', JSON.stringify(rabbitMsg))
    await server.publishInExchange('amq.direct', 'rota', JSON.stringify(rabbitMsg))

    return
}

module.exports = sendRabbit