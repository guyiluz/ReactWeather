var React = require('react');
var {Link}= require('react-router')
var Examples=(props)=>{

  return (

<div>
  <h1 className="text-center  page-title">Examples</h1>
  <p> Here are few examples</p>
  <ol>
    <li>

      <Link to="/?location=Tel-Aviv "> Tel-Aviv </Link>

    </li>
    <li>

      <Link to="/?location=Rio"> Rio</Link>

      </li>


    </ol>

  </div>


  )
};
module.exports = Examples;
