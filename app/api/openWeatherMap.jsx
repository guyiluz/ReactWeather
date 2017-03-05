var axios= require('axios');


const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=1bb46dd3a3b0e593f93751e147bb1b69&units=metric'


module.exports={
getTemp: function (location) {
  var encodedLocation= encodeURIComponent(location)
  var requesUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
   return axios.get(requesUrl).then(function(res){
     debugger;
  if(res.data.cod&& res.data.message){
  throw new Error(res.data.message);
}else{
return res.data.main.temp;
}
},function (res) {
  throw new Error(res.data.message);
})
}
}
