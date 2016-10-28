var request = require('request');

module.exports = function(location,callback){
    //console.log(location);
    var cityName = encodeURIComponent(location);
    console.log(cityName);
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=4139afd01b8d000974cecf189c8942b3";
request({url, json:true},function(err,response,body){
if(!err && response.statusCode==200){
    //console.log(JSON.stringify(body,null,4));
    callback('Current City ' + body.name + ' Temp = ' + body.main.temp + ' !')
}
});
}