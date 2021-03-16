import React from 'react'
import {Link} from "react-router-dom";

function About() {
  return (
      <>
        <div class="intro intro-single route bg-image overlay-bg">
        <div class="overlay-mf"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <h2 class="intro-title mb-4">About</h2>
              <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <Link exact to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">About</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <main id="main">
      <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src="assets/img/about.svg" class="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Divya Makwana</span></p>
                        <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span class="title-s">Email: </span> <span>divyajm1290@gmail.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>+91 12457 25225</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor
                      at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                      porttitor accumsan tincidunt.
                    </p>
                    <p class="lead">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                    </p>
                    <p class="lead">
                      Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      Nulla porttitor accumsan
                      tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
    </>
  )
}

export default About
