import React from 'react'
import logo from '../static/img/intrepd_logo.png'
import './Home.css'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Intrepd logo" />
       
       <div className="text">
        <p>intrepd.au</p>
        <p><i class="fa fa-phone"></i> <a href="tel:+61424022239"> +61 424 022 239</a></p>
        </div>
       
      </header>
    </div>
  )
}

export default Home