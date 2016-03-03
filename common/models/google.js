// example of non-database model

module.exports = function(Google) {

  // the result var will be sent to the client
  Google.status = function(cb) {
    var result = 'RESULT FOUND!';
    cb(null, result);
  };

  Google.remoteMethod(
    'status',
    {
      http: {path: '/search', verb: 'get'},
      returns: {arg: 'search', type: 'string'}
    }
  );

};
