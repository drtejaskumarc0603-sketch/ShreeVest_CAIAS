const {model} = require('mongoose');

const {orderSchema} = require('../schema/orderSchema');

const orderModel = new model("order" , orderSchema);

module.exports = {orderModel};