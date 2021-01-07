const User = require("../models/User");

const sendRabbit = require('../../utils/sendRabbit')

class UserController {
    async store(req, res) {
        const { name, email } = req.body;

        const checkUserExists = await User.findOne({ email });
        if (checkUserExists) {
            return res.status(401).json({msg: "user exist"});
        }
        
        const user = await User.create({ name, email });

        await sendRabbit('User', user)

        return res.status(200).json(user);
    }
}

module.exports = new UserController()