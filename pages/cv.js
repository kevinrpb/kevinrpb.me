import React from 'react'

import ExportedImage from 'next-image-export-optimizer'

import Page from '@layouts/page'
import BackgroundCanvas from '@components/background-canvas'
import Icon from '@components/icon'
import SaneLink from '@components/link'

const CV = () => (
  <Page>
    <BackgroundCanvas id='canvas' />

    <header data-page='cv'>
      <SaneLink href='/files/kevinrpb_cv.pdf' className='pill percentage-100 shadow' target='_blank' rel='noopener noreferrer'>Download Resume</SaneLink>
    </header>

    <main data-page='cv'>
      <div id='name'>
        <h1>Kevin Romero Peces-Barba</h1>
      </div>

      <div id='links'>
        <span className='divider'></span>

        <div>
          <SaneLink href='https://kevinrpb.me'>
            <Icon name='compass' />
            <p>kevinrpb.me</p>
          </SaneLink>

          <SaneLink href='https://github.com/kevinrpb'>
            <Icon name='github' />
            <p>/kevinrpb</p>
          </SaneLink>
        </div>

        <span className='divider'></span>
      </div>

      <div id='skills'>
        <div className='title mobile'>
          <Icon name='code' />
          <h2>Skills</h2>
        </div>

        <div className='set'>
          <h2>Machine Learning</h2>

          <div className='skill'>
            <p>Python</p>
            <span className=' pill percentage-100 shadow'></span>
          </div>
          <div className='skill'>
            <p>Tensorflow</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
          <div className='skill'>
            <p>NLTK</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
          <div className='skill'>
            <p>R</p>
            <span className=' pill percentage-40 shadow'></span>
          </div>
        </div>

        <div className='set'>
          <h2>Apple</h2>

          <div className='skill'>
            <p>Xcode + Swift</p>
            <span className=' pill percentage-100 shadow'></span>
          </div>
          <div className='skill'>
            <p>SwiftUI</p>
            <span className=' pill percentage-100 shadow'></span>
          </div>
          <div className='skill'>
            <p>Combine</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
          <div className='skill'>
            <p>UIKit</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
          <div className='skill'>
            <p>AppKit</p>
            <span className=' pill percentage-40 shadow'></span>
          </div>
        </div>

        <div className='set break-3'>
          <h2>Web</h2>

          <div className='skill'>
            <p>HTML + CSS + JS</p>
            <span className=' pill percentage-100 shadow'></span>
          </div>
          <div className='skill'>
            <p>NodeJS</p>
            <span className=' pill percentage-100 shadow'></span>
          </div>
          <div className='skill'>
            <p>React</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
          <div className='skill'>
            <p>Angular</p>
            <span className=' pill percentage-80 shadow'></span>
          </div>
        </div>

        <div className='set'>
          <h2>Other Coding</h2>

          <div className='skill'>
            <p>Git Flow</p>
          </div>
          <div className='skill'>
            <p>Java SE</p>
          </div>
          <div className='skill'>
            <p>Shell Script</p>
          </div>
          <div className='skill'>
            <p>ReactiveX</p>
          </div>
          <div className='skill'>
            <p>MVVM</p>
          </div>
          <div className='skill'>
            <p>p5.js</p>
          </div>
        </div>

        <div className='set'>
          <h2>Other Skills</h2>

          <div className='skill'>
            <p>UI & UX</p>
          </div>
          <div className='skill'>
            <p>Algorithms</p>
          </div>
          <div className='skill'>
            <p>Statistical Analysis</p>
          </div>
          <div className='skill'>
            <p>Agile (Scrum)</p>
          </div>
          <div className='skill'>
            <p>Leadership</p>
          </div>
          <div className='skill'>
            <p>Teamwork</p>
          </div>
          <div className='skill'>
            <p>Quick Learner</p>
          </div>
        </div>

        <div className='set'>
          <h2>Languages</h2>

          <div className='skill'>
            <p>Spanish (Native)</p>
          </div>
          <div className='skill'>
            <p>English (Level C1)</p>
          </div>
        </div>
      </div>

      <div id='sections'>
        <section>
          <div className='title'>
            <Icon name='school' />
            <h2>Education</h2>
          </div>

          <div className='content'>
            <div>
              <h3 className='title'>M.S. in Computer Science & Technology</h3>
              <div className='info'>
                <p className='date'>2020 - 2022</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>B.S. in Computer Science & Engineering</h3>
              <div className='info'>
                <p className='date'>2014 - 2020</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>B.S. in Business Administration</h3>
              <div className='info'>
                <p className='date'>2014 - 2020</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='title'>
            <Icon name='map-signs' />
            <h2>Abroad</h2>
          </div>

          <div className='content'>
            <div>
              <h3 className='title'>B.S. in Computer Science & Engineering</h3>
              <div className='info'>
                <p className='date'>2017 - 2018</p>
                <p className='place'>
                  <SaneLink href='https://www.ucsc.edu/'>
                    University of California Santa Cruz
                  </SaneLink>
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>B.S. in Business Administration</h3>
              <div className='info'>
                <p className='date'>2018 - 2019</p>
                <p className='place'>
                  <SaneLink href='https://gmu.edu'>George Mason University</SaneLink>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='title'>
            <Icon name='briefcase' />
            <h2>Work</h2>
          </div>

          <div className='content'>
            <div>
              <h3 className='title'>Research Assistant</h3>
              <div className='info'>
                <p className='date'>November 2020 - Present</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Collaborated with the University&apos;s Applied Artificial Intelligence Group (GIIA)
                  and a telecommunications provider. My work consists in:
                </p>
                <p className='item'>
                  Conducting research on the applications of machine learning for analyzing
                  spatio-temporal data.
                </p>
                <p className='item'>
                  Providing counsel and advice to undegraduate students working on their B.S.
                  theses.
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>Computer Technical Specialist</h3>
              <div className='info'>
                <p className='date'>December 2019 - July 2020</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Collaborated with the University&apos;s GIIA and a telecommunications provider to
                  complete my B.S. thesis project. My work comprised:
                </p>
                <p className='item'>Analyzing mobile traffic data patterns.</p>
                <p className='item'>
                  Developing a visualization web application to aide management on taking decisions.
                </p>
                <p className='item'>
                  Conducting research on mobile traffic analysis and forecasting using machine
                  learning models.
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>iOS Developer Intern</h3>
              <div className='info'>
                <p className='date'>May 2019 - Aug 2019</p>
                <p className='place'>
                  <SaneLink href='https://babel.es/'>Babel S.I.</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Contributed in the development of mobile applications for clients. These projects
                  were iOS apps based on Swift. This included:
                </p>
                <p className='item'>
                  Designing the architectural structure of the app, following modern pa]erns (MVVM,
                  Clean).
                </p>
                <p className='item'>
                  Implementing user interfaces and business logic, as well as the interaction
                  between both, following reactive programming techniques (RxSwift).
                </p>
              </div>
            </div>

            <div break-1>
              <h3 className='title'>Computer Technical Specialist</h3>
              <div className='info'>
                <p className='date'>Jun 2017 - Sep 2017</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Worked on creating a Web Application with the purpose of business management. The
                  project involved:
                </p>
                <p className='item'>
                  Setting up a web server based on NodeJS and using modern frameworks such as
                  ExpressJS.
                </p>
                <p className='item'>Managing the environment to work with a MongoDB database.</p>
                <p className='item'>
                  Developing a modern, responsive website to act as the frontend to the app, taking
                  advantage of frameworks like jQuery and MaterializeCSS.
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>Multimedia Intern</h3>
              <div className='info'>
                <p className='date'>Sep 2016 - Jun 2017</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Provided technical support in the multimedia rooms of the University for events
                  and classes. This covered:
                </p>
                <p className='item'>
                  Setting up and controlling multimedia equipment such as cameras, microphones, and
                  mix tables.
                </p>
                <p className='item'>
                  Recording and editing multimedia material to create web-ready video content.
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>Helpdesk Intern</h3>
              <div className='info'>
                <p className='date'>Jan 2016 - Sep 2016</p>
                <p className='place'>
                  <SaneLink href='https://uc3m.es'>University Carlos III of Madrid</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Provided technical support to professors and staff in the university. This
                  included:
                </p>
                <p className='item'>
                  Setting up software requirements for new computers and other devices such as
                  printers or scanners.
                </p>
                <p className='item'>Repairing and replacing faulty components in computers.</p>
                <p className='item'>
                  Troubleshooting software problems with operative systems and applications such as
                  office suites, browsers, and email clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='title'>
            <Icon name='heart' />
            <h2>Volunteer</h2>
          </div>

          <div className='content'>
            <div>
              <h3 className='title'>Imagineware</h3>
              <div className='info'>
                <p className='date'>2014 - present</p>
                <p className='place'>
                  <SaneLink href='https://imagineware.org'>imagineware.org</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  Long 4me member in the student technology-focused club "Imagineware". As part of
                  this club, I have:
                </p>
                <p className='item'>Organized and taken part in different hackathons.</p>
                <p className='item'>
                  Organized several events with the purpose of bringing people and technology
                  together. The main event we have organized is the Hour Of Code (
                  <SaneLink href='https://hourofcode.com'>hourofcode.com</SaneLink>), a world-wide
                  coordinated event. During this event, which we have hosted in Universidad Carlos
                  III for several years, we invite students from high schools and prepare a series
                  of tech-related activities for them to enjoy.
                </p>
                <p className='item'>
                  Organized different workshops and courses aimed at teaching office suites (such as
                  MS Office), version control (git), and other development tools and languages.
                  These were focused in the university and given to students of different majors.
                </p>
              </div>
            </div>

            <div>
              <h3 className='title'>IEEE GMU Club</h3>
              <div className='info'>
                <p className='date'>2018 - 2019</p>
                <p className='place'>
                  <SaneLink href='https://gmuieee.github.io/'>gmuieee.github.io</SaneLink>
                </p>
              </div>
              <div className='notes'>
                <p>
                  During my program abroad in George Mason University I collaborated with the IEEE
                  club to provide a series of workshops for students in the area of web development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </Page>
)

export default CV
