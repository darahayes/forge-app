angular.module('connectionServiceModule', [])

.factory('connectionService', function() {
  // var host = '192.168.192.58' //at home
  // var host = '192.168.43.27'; //mobile hotspot
  var host = '139.59.160.68';
  var port = 4000;
  var base_url = 'http://'+host+':'+port

  return {
    host: host,
    port: port,
    url: base_url
  }
})
