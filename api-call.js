var weather = require("./weather.js");
var location = require("./location.js");
var argv = require("yargs")
    .option('location',{
        alias:'l',
        describe:'provide location',
    })
    .help('help')
    .argv;

//console.log(argv.l);


if(typeof argv.l === 'string' && argv.l.length > 0 ){

    weather(argv.l,weather);
}else{
    location(function(callLocation){
        console.log(weather.toString());
        weather(callLocation.city,function(getWeather){
                console.log(getWeather);
        });
    })
}

/*
weather(function(weatherReport){
    console.log(weatherReport)
});
*/
/*
location(function(location){
    console.log(location);
})

*/