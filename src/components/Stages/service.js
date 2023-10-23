import React from 'react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import './service.scss';
import { AnimatedTextStaggerLetter } from '../Hero/hero_components.js';

const Service = () => {
  return (
    <main class="main-container">
      <header class="main-header">
        <span>Stages of</span>
        <AnimatedTextStaggerLetter text="works" className="text-red" />
      </header>
      <div className="list-item">
        <div className="row-1">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(a)</span>
                <div className="test-text">
                  <h1>Task discussion</h1>
                  <p>
                    In my opinion, deep understanding of the brief and client is
                    a must in the starting point. Determining project goals and
                    functional specifications, knowing competitors and target
                    audiences, making researches will be taken at this stage in
                    order to find a precise combination between Typography,
                    Color, Composition, Motion and brand assets. For me, this
                    process is the foundation for solving business problems and
                    discovering a right direction for the perfect design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(b)</span>
                <div className="test-text">
                  <h1>Site Structure</h1>
                  <p>
                    After delving into your requirements, we move on to
                    structuring your website. Even before thinking about design,
                    it's crucial to conduct in-depth research. We analyze the
                    market, your business's strengths and weaknesses, as well as
                    your competitors. We also take the time to understand your
                    target audience. Based on this information, I create a
                    black-and-white prototype that will serve as the foundation
                    for the final design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-3">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(c)</span>
                <div className="test-text">
                  <h1>Site Design</h1>
                  <p>
                    Design is a critical step in creating your website. I
                    prepare design references that we discuss together. We
                    create one or two layout prototypes for the initial sections
                    of the site to validate the overall style that suits your
                    preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-4">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(d)</span>
                <div className="test-text">
                  <h1>Full Design</h1>
                  <p>
                    Once we've determined the style you like, I proceed to the
                    full design of the website. This involves creating a
                    detailed layout that incorporates the entire design concept
                    for the entire site. This is where aesthetics come to life,
                    with careful consideration of layout, colors, typography,
                    and thoughtfully chosen visual elements to provide a
                    consistent user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-5">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(e)</span>
                <div className="test-text">
                  <h1>Development</h1>
                  <p>
                    The development phase transforms the static design into an
                    interactive website. I use dev tools like Figma to transfer
                    the previously designed layout. I also ensure that the site
                    is connected to the necessary services, such as databases or
                    content management systems. Before going live, the site is
                    meticulously configured and tested to ensure smooth
                    operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-6">
          <div className="test-col1">
            <div className="test-container">
              <div className="test-content">
                <span>(f)</span>
                <div className="test-text">
                  <h1>Final Delivery</h1>
                  <p>
                    Finally, we move on to the site's delivery. I transfer the
                    final site to your paid account. If needed, I can provide
                    you with video instructions to help you manage and maintain
                    your website. This includes guidance on content management,
                    updates, and other essential aspects to keep your site up to
                    date and performing well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
