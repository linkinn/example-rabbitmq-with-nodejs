const User = require('../app/models/User')
const Buy = require('../app/models/Buy')

class CreateModel {
    async execute(nameModel, data) {
        const models = {
            User,
            Buy
        }
    
        await models[nameModel].create(data)
        return {model: nameModel, msg: "Criado com sucesso"}
    }
}

module.exports = new CreateModel()