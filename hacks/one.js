var DataSource = require('loopback-datasource-juggler').DataSource;

var ds = new DataSource({
  connector: require('./ramdb.js'),
  host: 'localhost',
  db: 'mydb'
});

var User = ds.define('User', {
  name: String,
  bio: String,
  dob: Date
})

var uA = new User({
  name: 'Rocky',
  bio: 'cool dude',
  dob: '12/01/2012'
});
uA.save()

var uB = new User({
  name: 'Jimmy',
  bio: 'disco dancer',
  dob: '10/12/2010'
});
uB.save()

User.all(function (err, data) {
  console.log(data)
})
