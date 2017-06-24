import React from 'react'
import Link from "gatsby-link"
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'
import Credits from '../components/Credits'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'
import a7 from '../assets/a7.jpg'
import a8 from '../assets/a8.jpg'
import a9 from '../assets/a9.jpg'
import a10 from '../assets/a10.jpg'
import a11 from '../assets/itondo.mp4'

export default class Index extends React.Component {
  render() {
    return (
      <main id="case-itondo" className="caseLayout">
        <Navigation />
        <section className="hero">
          <div className="h-top">
            <ul>
              <li><h5>Role</h5></li>
              <li><h5>Lead designer</h5></li>
            </ul>
            <ul>
              <li><h5>Scope</h5></li>
              <li><h5>UI, UX and Interaction Design</h5></li>
              <li><h5>Art Direction, Branding</h5></li>
              <li><h5>Animation, Illustration</h5></li>
              <li><h5>Prototyping</h5></li>
            </ul>
            <ul>
              <li><h5>Deliverables</h5></li>
              <li><h5>Guidelines</h5></li>
              <li><h5>Mockups</h5></li>
              <li><h5>Prototype</h5></li>
            </ul>
            <ul>
              <li><h5>Duration</h5></li>
              <li><h5>4 months</h5></li>
            </ul>
          </div>
          <div className="h-wrapper">
            <aside>
              <h3>Itondo</h3>
              <div className="challenges">
                <ul>
                  <li><h5>Challenges</h5></li>
                  <li><div><span>1</span><p>Creating brand and personality for a digital e-commerce product.</p></div></li>
                  <li><div><span>2</span><p>Coming up with a design that respects art and its audience</p></div></li>
                  <li><div><span>3</span><p>Delivering a robust AR experience.</p></div></li>
                </ul>
              </div>
            </aside>
            <div className="h-right">
              <div className="h-pic"><span></span></div>
            </div>
          </div>
        </section>

        <article>
          We began the project in a team of three designers with interviewing Karen and Dirk, who came to us with their idea for the product. From the beginning, we all felt the augmented reality tech could have a transformative effect on the online art trade industry. So that’s what we started with, a rough working proof of concept for the AR module that allowed us to rally interest around the idea and get a feeling of how well it worked.
        </article>

        <section className="paper">
          <div className="content">
            <h3>Augmented<br />Reality</h3>
            <div>
              <p>For the Live Preview Mode to work, you’d have to first print out an A4 sized marker, place it where you’d like to hang the painting and voila, Itondo would instantly replace the marker with the chosen artwork on screen and even match its dimensions. Once you see the surprisingly magical transformation happen you’d be hard pressed to imagine shopping for art without it.</p>
            </div>
          </div>
          <Gallery>
            <figure className="card tablet"><img src={a5} alt="AR Empty" width="1280" height="960"/></figure>
            <figure className="card tablet"><img src={a6} alt="AR Painting" width="1280" height="960"/></figure>
          </Gallery>
        </section>

        <article>
          The next step was to create a brand identity for Itondo. Between its name which translates to a round painting and the AR module, I had plenty enough to work with. For the app icon/logotype, I went with a round camera iris with brush strokes in place of blades. I knew from the start that I want the interface to be simple in form and for that to work I needed a dedicated typeface. After some trial and error, I’ve chosen <a href="http://ffmark.com"><span className="highlighter">FF Mark</span></a>, a neo-grotesque with wide proportions and a warmer tone than other geometric sans serifs. Paired with the icon it gave me a perfect read on where to go further with the design, and that was round shapes, restrained use of warm tones and unrestrained white space. Now for the last piece of the puzzle, I introduced watercolors, the single detail that would complete the brand.
        </article>

        <section className="paper">
          <div className="content">
            <h3>Brand</h3>
            <div>
              <p>I’ve created a number of illustrations to accompany the Itondo onboarding process. I wanted them to be an extension of the interface and not to be confused with art, hence the simple blocky appearance and warm tones. The magenta colour was a choice of the client and I’ve grown to really like it. I feel like for this design any bold color could work.</p>
            </div>
          </div>
          <Gallery>
            <figure className="card picture"><img src={a8} alt="Illustration" width="1160" height="1024"/></figure>
            <figure className="card picture"><img src={a9} alt="App Icon" width="1160" height="1024"/></figure>
            <figure className="card picture"><img src={a10} alt="Colour and type" width="1160" height="1024"/></figure>
          </Gallery>
        </section>

        <article>
          Having a working AR module and visual identity in place, I could proceed to design the rest of the app. My idea was to create a blank canvas to showcase the paintings – once you have great content you don’t really need to compensate with the UI. Still, I wanted to inject some character into the UI and that’s where the brand elements like watercolors, typography and creative use of animation came into play. I’m super proud of the result, which balances the modernist simplicity you’d find in art galleries with some offbeat details more common to modern apps. We’ve also convinced the client to pursue an iPhone version, providing them with an exact timeframe, cost and making a strong case for its wide adoption that could help tap into a broader market. For the iPhone app to work all I had to do really was to transition from collection to table based layouts and fine tune some details.
        </article>

        <section className="paper">
          <div className="content">
            <h3>Design</h3>
            <div>
              <p>The interface uses standard iOS patterns like popovers, tab bars, and navigation controllers, only customized to appear airier. I’ve chosen to transition to a dark lightroom for viewing individual paintings so that art buyers could get a better feeling of the colors and details on screen. To facilitate art discovery, I’ve created a dedicated space that lists paintings not only by gallery and artists but also emotion, color or size. I also love how the artist profiles came out. We even built our own framework that samples the colors in profile picture and mixes them with a random watercolor below.</p>
            </div>
          </div>
          <Gallery>
            <figure className="card tablet"><img src={a1} alt="Itondo Collection View" width="1280" height="960"/></figure>
            <figure className="card portrait"><img src={a2} alt="Itondo Artist View" width="960" height="1280"/></figure>
            <figure className="card tablet"><img src={a4} alt="Itondo Search View" width="1280" height="960"/></figure>
            <figure className="card tablet"><img src={a3} alt="Itondo Art View" width="1280" height="960"/></figure>
            <figure className="card phone"><img src={a7} alt="Itondo Welcome View" width="750" height="1334"/></figure>
          </Gallery>
        </section>

        <article>
          For this project, I’ve skipped the use of wireframes and went straight ahead to prototyping the real thing. The layout was simple enough and I knew precisely what I want with the design. What I didn’t know was how to connect the different pieces of the interface together. That’s where <a href="https://framer.com" target="_blank"><span className="highlighter">Framer</span></a>, a code based prototyping tool, helped me figure out the connections – the delightful micro-interactions that tied it all together. I didn’t foresee animation playing such a huge role in establishing the look and feel of the app but after prototyping my ideas, testing and showing them around we all felt that animation was pivotal and worth the added effort.
        </article>

        <section className="paper">
          <div className="content">
            <h3>Prototype</h3>
            <div>
              <p>I believe motion has a certain storytelling quality and done properly it can give you a sense of spatial awareness and guide you through the interface. I’ve introduced animation at a very early stage of design and it has influenced the way the entire app is laid out. In a way prototyping Itondo gave me insight into how the app is used by real people and the confidence to proceed with ideas that otherwise I’d find too frivolous or against established patterns.</p>
            </div>
          </div>
          <div className="slides static">
            <figure className="card tablet-video"><video width="682" height="512" loop autoPlay playsInline><source src={a11} type="video/mp4" /></video></figure>
          </div>
        </section>

        <div className="link-group">
          <ul>
            <li><Link to="/" className="button"><span className="highlighter">Go back</span></Link></li>
            <li><a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" target="_blank" className="button"><span className="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></a></li>
            <li><Link to="/mirage/" className="button"><span className="highlighter">Next case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></Link></li>
          </ul>
        </div>

        <Credits />

      </main>
    )
  }
}
