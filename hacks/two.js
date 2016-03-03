var memory = require('loopback-datasource-juggler/lib/connectors/memory');
var ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;

var builder = new ModelBuilder();

var User = builder.define('User', {
  name: String,
  bio: String,
  approved: Boolean,
  joinedAt: Date,
  age: Number
});

var DataSource = require('loopback-datasource-juggler').DataSource;
var ds = new DataSource('memory');

User.attachTo(ds);
