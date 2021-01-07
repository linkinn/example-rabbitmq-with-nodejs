const Buy = require("../models/Buy");

const sendRabbit = require('../../utils/sendRabbit')

class BuyController {
    async store(req, res) {
        const { product, price } = req.body;
        
        const buy = await Buy.create({ product, price });

        await sendRabbit('Buy', buy)

        return res.status(200).json(buy);
    }
}

module.exports = new BuyController()