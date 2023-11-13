import React from 'react'
import 'bulma/css/bulma.min.css';
import renan from '../static/img/renan.png'
import code from '../static/img/code.png'

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
             
            </div>
          </div>
        </div>
      </div>

{/* 
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
      */}

    </div>
  )
}

export default About