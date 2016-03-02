
exports.initialize = function initializeDataSource(dataSource, postInit) {
  dataSource.connector = new RamDb(dataSource.settings);
  dataSource.connector.connect(postInit);
};

function RamDb(settings) {

}

RamDb.prototype.connect = function (postInit) {
  postInit();
};

// CRUD

// Create a new model instance
RamDb.prototype.create = function (model, data, callback) {


};

// Query model instances by filter
RamDb.prototype.all = function (model, filter, callback) {

};

// Delete model instances by query
RamDb.prototype.destroyAll = function (model, where, callback) {

};

// Update model instances by query
RamDb.prototype.updateAll = function (model, where, data, callback) {

};

// Count model instances by query
RamDb.prototype.count = function (model, callback, where) {

};

/*
A connector can choose to implement the following methods, otherwise, they will be mapped to those in the previous slide.
*/

// Find a model instance by id
RamDb.prototype.find = function (model, id, callback) {

};

// Delete a model instance by id
RamDb.prototype.destroy = function (model, id, callback) {

};

// Update a model instance by id
RamDb.prototype.updateAttributes = function (model, id, data, callback) {

};

// Check existence of a model instance by id
RamDb.prototype.exists = function (model, id, callback) {

};

/*
A connector can also optimize certain methods if the underlying database provides native/atomic operations to avoid multiple calls.
*/

// Save a model instance
RamDb.prototype.save = function (model, data, callback) {

};

// Find or create a model instance
RamDb.prototype.findOrCreate = function (model, data, callback) {

};

// Update or insert a model instance
RamDb.prototype.updateOrCreate = function (model, data, callback) {

};
