var React = require('react');

var About= (props)=> {

  return(
<div className= "text-center">
  <h3>About </h3>
  <h4>This is a weather app bulid on React</h4>
  <p>Here are some of the tools i used: </p>
  <ul>

    <li>
      <a herf="https://openweathermap.org/">openWeatherMap</a>

    </li>
    <li>
      <a herf="https://facebook.github.io/react/">React</a>
    </li>
  </ul>
           </div>

         )
};

module.exports = About;
