import React from 'react'

export const Intro = () => {
    return (
        <div id="home" class="intro route bg-image" style="background-image: url(assets/img/intro-bg.jpg)">
            <div class="overlay-itro"></div>
            <div class="intro-content display-table">
                <div class="table-cell">
                    <div class="container">
                        <h1 class="intro-title mb-4">I am Morgan Freeman</h1>
                        <p class="intro-subtitle"><span class="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong class="text-slider"></strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
