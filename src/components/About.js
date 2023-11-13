import React from 'react'
import 'bulma/css/bulma.min.css';
import renan from '../static/img/renan.png'
import cintia from '../static/img/cintia.jpg'
import code from '../static/img/code.png'
import analytics from '../static/img/analytics.png'

import './About.css'

const About = () => {
  return (

    <div class="columns is-centered is-offset-1">

           
      <div class="column is-one-fifth is-variable">
        <div class="content"></div>

        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src={renan} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={code} alt="role:developer" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Renan Zanesco Comoli</p>
                <p class="subtitle is-6">@enedois</p>
              </div>
            </div>

            <div class="content">
              Renan is our main developer, he likes to go surfing and mountainbiking!
             <br/>
             <br/>
            </div>
          </div>
        </div>
      </div>


      <div class="column is-one-fifth is-variable">
        <div class="content"></div>

        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src={cintia} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={analytics} alt="role:business intelligence" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Cintia Inoue</p>
                <p class="subtitle is-6">@cintiasat</p>
              </div>
            </div>

            <div class="content">
            Results-driven data professional with 5+ years shaping business performance. Passionate about digital growth, data analytics, and insights.
            
            </div>
          </div>
        </div>
      </div>
     

    </div>
  )
}

export default About