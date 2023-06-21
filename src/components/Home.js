import React from 'react'
import logo from '../static/img/intrepd_logo.png'
import './Home.css'
import 'bulma/css/bulma.min.css';


const Home = () => {
  return (
    <div class="columns homepage">
      <div class="column is-full has-text-centered">
        <div class="content">
          <img src={logo} className="logo" alt="Intrepd logo" />     
         
        </div>
        <div class="block">
        <a href="tel:+61424022239"> +61 424 022 239</a>
        </div>

      </div>
    </div>
  )
}

export default Home