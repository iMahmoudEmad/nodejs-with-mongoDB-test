const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const ClassesController = new Schema({
    total_classes: {
        type: Number
    },
    total_mens_classes: {
        type: Number
    },
    total_womens_classes: {
        type: Number
    },
    total_payment: {
        type: Number
    },
    total_mens_payment: {
        type: Number
    },
    total_womens_payment: {
        type: Number
    },
}, {
    timestamps: true,
});

ClassesController.plugin(mongoosePaginate);
const Classes = mongoose.model('Classes', ClassesController);

module.exports = Classes;