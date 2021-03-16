import React from 'react'
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div class="intro intro-single route bg-image overlay-bg">
        <div class="overlay-mf"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <h2 class="intro-title mb-4">Services</h2>
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <Link exact to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">Services</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section id="service" class="services-mf pt-5 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <p class="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="ion-monitor"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Web Design</h2>
                  <p class="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                    provident vitae! Magni
                    tempora perferendis eum non provident.
                </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="ion-code-working"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Web Development</h2>
                  <p class="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                    provident vitae! Magni
                    tempora perferendis eum non provident.
                </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="ion-android-phone-portrait"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Responsive Design</h2>
                  <p class="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                    provident vitae! Magni
                    tempora perferendis eum non provident.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
