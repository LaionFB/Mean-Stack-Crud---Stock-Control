"use strict";

const Clothes     = require('./clothes.model');
const mongoHelper = require('../../mongodb/mongo-helper');

module.exports.getAll = () => {
    return Clothes.find({ _deprecatedDate: null })
    .catch(mongoHelper.handleError);
}

module.exports.get = (id) => {
    return Clothes.findOne({ _id: id, _deprecatedDate: null })
    .then(mongoHelper.checkIfFound)
    .catch(mongoHelper.handleError);
}

module.exports.insert = (model) => {
    mongoHelper.removePrivateFields(model);
    let market = new Clothes(model);
    return market.save()
    .catch(mongoHelper.handleError);
}

module.exports.update = (model) => {
    mongoHelper.removePrivateFields(model, '_id');
    return Clothes.findOneAndUpdate({ _id: model._id }, { $set: model }, { runValidators: true });
}

module.exports.delete = (id) => {
    return Clothes.findOneAndDelete({ _id: id })
    .catch(mongoHelper.handleError);
}
