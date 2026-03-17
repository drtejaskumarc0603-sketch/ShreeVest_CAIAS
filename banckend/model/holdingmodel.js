const {model} = require('mongoose');

const {holdingSchema} = require('../schema/holdingSchema');

const holdingModel = new model("holding" , holdingSchema);


module.exports = {holdingModel};