var Sinalogin = require('../lib');
var request = require('request');

var account = {
	name: 'weibologin123@163.com',
	passwd: 'weibologin'
}



Sinalogin.weibo_login(account, function(err, loginInfo){
	if(loginInfo.logined){
		var j = loginInfo.j;

		request({url: 'http://weibo.com/youyudehexie?wvr=5&wvr=5&lf=reg', jar: j}, function (err, response, body) {
		  console.log(body)
		});
	}
}) 