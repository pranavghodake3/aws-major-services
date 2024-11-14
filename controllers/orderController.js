const orderService = require("../services/orderService")

const create = async (req, res) => {
    try {
        const response = await orderService.placeOrder();
        res.status().json(response);   
    } catch (error) {
        res.json({error});
    }
};

module.exports = {
    create,
};
