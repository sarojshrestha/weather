var request = require("request");
var url = "http://ipinfo.io/";

module.exports =  function(callback){
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            //console.log(body);
            var ipInfo = JSON.parse(body);
            //console.log(ipInfo);
            callback(ipInfo);
        }
    });
}