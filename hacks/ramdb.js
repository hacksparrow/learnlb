var databases = {
  'mydb': {},
  'test': {}
}

var idCounter = 0;

exports.initialize = function initializeDataSource(dataSource, postInit) {
  dataSource.connector = new RamDb(dataSource.settings);
  dataSource.connector.connect(postInit);
};

function RamDb(settings) {

  if (settings.db in databases) {
    this.host = settings.host;
    this.db = settings.db;
  }
  else {
    throw new Error('Database "' + settings.db + '"not found');
  }
}

RamDb.prototype.connect = function (postInit) {
  postInit();
};

// CRUD

RamDb.prototype.create = function (model, data, callback) {

  var id = idCounter++;
  data.id = id;
  databases[this.db][id] = data;

};

RamDb.prototype.all = function (model, filter, callback) {
  var self = this;
  var result = [];
  Object.keys(databases[self.db]).forEach(function (key) {
    result.push(databases[self.db][key]);
  })
  callback(null, result);
};

RamDb.prototype.destroyAll = function (model, where, callback) {

};

RamDb.prototype.updateAll = function (model, where, data, callback) {

};

RamDb.prototype.count = function (model, callback, where) {

};

// CRUD optional

RamDb.prototype.find = function (model, id, callback) {

};

RamDb.prototype.destroy = function (model, id, callback) {

};

RamDb.prototype.updateAttributes = function (model, id, data, callback) {

};

RamDb.prototype.exists = function (model, id, callback) {

};

RamDb.prototype.save = function (model, data, callback) {

};

RamDb.prototype.findOrCreate = function (model, data, callback) {

};

RamDb.prototype.updateOrCreate = function (model, data, callback) {

};
