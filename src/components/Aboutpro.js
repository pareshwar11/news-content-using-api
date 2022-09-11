import React from 'react'
import "./Aboutpro.css"
const Aboutpro = () => {
  return (
    <>
    <div className="container">
    <div class="card" id='cardid'>
  <div class="card-header">
  About NewsMan project
  </div>
  <div class="card-body" >
    <h5 class="card-title" id='cardti'>Building Process</h5>
    <p class="card-text" id='cardtxt'>
        <b>Used Web Technologies:-</b>
        <ol>
            <li>
            ReactJS
            </li>
            <li>
            Bootstrap
            </li>
            <li>
            NodeJS and Express for creating REST API
            </li>
            <li>
            Heroku for Hosting the API
            </li>
            <li>
            React Router for Navigation
            </li>
        </ol>
        <br />
        I just created this React project to boost my knowledge, here I have implemented the Pagination functionality.
    </p>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Aboutpro
