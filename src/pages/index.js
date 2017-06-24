import React from 'react'
import Link from "gatsby-link"
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Credits from '../components/Credits'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import e1 from '../assets/e1.jpg'
import e2 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'

export default class Index extends React.Component {
  render() {
    return (
      <main id="home">
        <Navigation />
        <Hero />
        <section className="paper itondo">
          <div className="content">
            <h3>Itondo</h3>
            <div>
              <p><span>2014&mdash;2015</span>Itondo is an iOS app for discovering, buying and trying out art. It allows anyone with an iPad to browse a curated selection of artworks from world-renowned artists and galleries and see how they’d look like in their home, office or art space with the help of an augmented reality powered Live Preview mode. Once settled on the perfect piece, they can buy it directly without leaving the app.</p>
              <div className="buttons">
                <Link to="/itondo/" className="button"><span className="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></Link>
                <a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" target="_blank" className="button"><span className="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></a>
              </div>
            </div>
            <ul className="scope">
              <li><h4>Art Direction</h4></li>
              <li><h4>Branding</h4></li>
              <li><h4>UI/UX</h4></li>
              <li><h4>Prototyping</h4></li>
              <li><h4>Illustration</h4></li>
              <li><h4>Icons</h4></li>
            </ul>
          </div>
          <Gallery>
            <figure className="card tablet"><img src={a1} alt="Itondo Collection View" width="1280" height="960"/></figure>
            <figure className="card portrait"><img src={a2} alt="Itondo Artist View" width="960" height="1280"/></figure>
            <figure className="card tablet"><img src={a3} alt="Itondo Art View" width="1280" height="960"/></figure>
          </Gallery>
        </section>

        <section className="paper mirage dark">
          <div className="content">
            <h3>Mirage</h3>
            <div>
              <p><span>2015</span>Mirage is the app companion to the range of wireless speakers and media players of the same name, made by Autonomic Controls in the US. It’s the digital hub of all music in the house, bridging the gap between different service providers and radio stations with fine-grained control for different rooms, users, and programming schedule.</p>
              <div className="buttons">
                <Link to="/mirage/" className="button"><span className="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></Link>
              </div>
            </div>
            <ul className="scope">
              <li><h4>Art Direction</h4></li>
              <li><h4>UI/UX</h4></li>
              <li><h4>Branding</h4></li>
              <li><h4>Prototyping</h4></li>
              <li><h4>Icons</h4></li>
            </ul>
          </div>
          <Gallery>
            <figure className="card phone"><img src={b1} alt="Mirage Now Playing View" width="750" height="1334"/></figure>
            <figure className="card tablet"><img src={b2} alt="Mirage Collection View" width="1280" height="960"/></figure>
            <figure className="card phone"><img src={b3} alt="Mirage Album View" width="750" height="1334"/></figure>
          </Gallery>
        </section>

        <section className="paper explain">
          <div className="content">
            <h3>Explain Everything</h3>
            <div>
              <p><span>2015&mdash;2016</span>Explain Everything is a digital interactive whiteboard made for educators, students, and creators to communicate their ideas, teach and learn from others. For over a year I worked as product designer on the team. Together we conceptualized, designed and communicated new groundbreaking features like real-time collaboration, apps for the iPhone and Apple TV and the introduction of Discover, a content sharing portal for all things made with Explain Everything.</p>
              <div className="buttons">
                <a href="https://itunes.apple.com/app/id1020339980?mt=8" target="_blank" className="button"><span className="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14">
                  <path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/>
                </svg></a>
                <a href="https://play.google.com/store/apps/details?id=com.explaineverything.explaineverything" target="_blank" className="button"><span className="highlighter">Get it on Google Play</span><svg width="9" height="14" viewBox="0 0 9 14">
                  <path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/>
                </svg></a>
              </div>
            </div>
            <ul className="scope">
              <li><h4>Product Design</h4></li>
              <li><h4>Web Design</h4></li>
              <li><h4>Prototyping</h4></li>
              <li><h4>Illustration</h4></li>
              <li><h4>Animation</h4></li>
            </ul>
          </div>
          <Gallery>
            <figure className="card tablet"><img src={c2} alt="Explain Everything Collection View" width="1280" height="960"/></figure>
            <figure className="card phone"><img src={c3} alt="Explain Everything iPhone" width="750" height="1334"/></figure>
            <figure className="card tablet"><img src={c1} alt="Explain Everything Art View" width="1280" height="960"/></figure>
          </Gallery>
        </section>

        <section className="paper juice dark">
          <div className="content">
            <h3>Juice</h3>
            <div>
              <p><span>2014</span>Juice is a fitness tracking app built with casual, daily use in mind. It tracks all movement, translates it into calories burnt and overlays the distance taken onto a map. Using the app should feel like having a journal for daily activity: a record of how healthy each day was, of where and when you traveled. The app also allows competing against others in achieving these goals.</p>
            </div>
            <ul className="scope">
              <li><h4>UI/UX</h4></li>
              <li><h4>Prototyping</h4></li>
              <li><h4>Animation</h4></li>
            </ul>
          </div>
          <Gallery>
            <figure className="card phone"><img src={e1} alt="Juice Steps View" width="750" height="1334"/></figure>
            <figure className="card phone"><img src={e2} alt="Juice Activity View" width="750" height="1334"/></figure>
            <figure className="card phone"><img src={e3} alt="Juice Distance View" width="750" height="1334"/></figure>
          </Gallery>
        </section>

        <section className="paper mosaic">
          <div className="content">
            <h3>Mosaic</h3>
            <div>
              <p><span>2016</span>Mosaic is an app we’ve made with a friend for creating pixel art on the iPhone and iPad. It has just the right tools and limitations needed to easily draw artworks or use the camera and turn photos into your canvas. Mosaic also allows for easy printing and sharing and nicely integrates with messaging apps turning the keyboard into a drawing canvas.</p>
            </div>
            <ul className="scope">
              <li><h4>Art Direction</h4></li>
              <li><h4>Product Design</h4></li>
              <li><h4>Prototyping</h4></li>
              <li><h4>Brand</h4></li>
              <li><h4>Animation</h4></li>
              <li><h4>Icons</h4></li>
            </ul>
          </div>
          <Gallery>
            <figure className="card phone"><img src={d2} alt="Mosaic Welcome Screen" width="750" height="1334"/></figure>
            <figure className="card tablet"><img src={d1} alt="Mosaic Art View" width="1280" height="960"/></figure>
            <figure className="card phone"><img src={d3} alt="Mosaic Collection View" width="750" height="1334"/></figure>
          </Gallery>
        </section>

        <Credits />

      </main>
    )
  }
}
