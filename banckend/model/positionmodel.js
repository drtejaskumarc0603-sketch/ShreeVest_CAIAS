const {model} = require('mongoose');

const {positionSchema} = require('../schema/positionSchema');

const positionModel = new model("position" , positionSchema);

module.exports = {positionModel};