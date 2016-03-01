angular.module('connectionServiceModule', [])

.factory('connectionService', function() {
	// var host = 192.168.192.56 //at home
	var host = '192.168.43.27'; //mobile hotspot
	var port = 4000;
	var base_url = 'http://'+host+':'+port
	
	return {
		host: host,
		port: port,
		url: base_url
	}

})