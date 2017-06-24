import React from 'react'
import Link from "gatsby-link"
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'
import Credits from '../components/Credits'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'
import b7 from '../assets/b7.jpg'
import b8 from '../assets/b8.jpg'
import b9 from '../assets/icon-old.png'
import b10 from '../assets/icon-new.png'
import b11 from '../assets/navigation.mp4'
import b12 from '../assets/select.mp4'

export default class Index extends React.Component {

  render() {
    return (
      <main id="case-mirage" className="caseLayout">
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
              <li><h5>Animation</h5></li>
              <li><h5>Prototyping</h5></li>
            </ul>
            <ul>
              <li><h5>Deliverables</h5></li>
              <li><h5>Wireframes</h5></li>
              <li><h5>Guidelines</h5></li>
              <li><h5>Mockups</h5></li>
              <li><h5>Prototype</h5></li>
            </ul>
            <ul>
              <li><h5>Duration</h5></li>
              <li><h5>5 months</h5></li>
            </ul>
          </div>
          <div className="h-wrapper">
            <aside>
              <h3>Mirage</h3>
              <div className="challenges">
                <ul>
                  <li><h5>Challenges</h5></li>
                  <li><div><span>1</span><p>Complexity in designing for every possible streaming music and radio service.</p></div></li>
                  <li><div><span>2</span><p>Aligning our vision of a new, premium visual language with an external agency.</p></div></li>
                  <li><div><span>3</span><p>Proprietary hardware.</p></div></li>
                </ul>
              </div>
            </aside>
            <div className="h-right">
              <div className="h-pic"><span></span></div>
            </div>
          </div>
        </section>

        <article>
          For this app redesign, I teamed up with <a href="https://www.linkedin.com/in/jakubandrzejewski/"><span className="highlighter ">Jacob</span></a>, a UX designer. Together we started by interviewing existing users of Mirage to get a better feeling on what works and what needs to be changed within the current app. The answers we got were conclusive: the app was highly functional but cumbersome, unattractive and difficult to use. What followed was a thorough process of rethinking each and every single one of the different components and features; building and testing user flows; prototyping different layouts and ways to tell the story of a premium product through visual language. The outcome was a completely new Mirage app that facilitated music discovery, allowed for easy navigation and queue management while sporting a super sleek and contemporary design.
        </article>

        <section className="paper dark">
          <div className="content">
            <h3>Design</h3>
            <div>
              <p>With the sheer complexity of this app, that quickly escalated to hundreds of views, I needed a more organized way to approach the redesign. I started by creating a modular system of building blocks, basically designing every component of Mirage, before assembling them together, not unlike LEGO bricks. I built and tested numerous prototypes this way, simply reordering the blocks each time I started anew, without the fear of going back to square one or having to redraw each view from the start. I soon began to see the puzzles click, patterns emerge and the finalized interface take shape.</p>
            </div>
          </div>
          <Gallery>
            <figure className="card phone"><img src={b1} alt="Mirage Now Playing View" width="750" height="1334"/></figure>
            <figure className="card tablet"><img src={b2} alt="Mirage Collection View" width="1280" height="960"/></figure>
            <figure className="card phone"><img src={b3} alt="Mirage Album View" width="750" height="1334"/></figure>
            <figure className="card phone"><img src={b4} alt="Mirage Search View" width="750" height="1334"/></figure>
            <figure className="card tablet"><img src={b5} alt="Mirage Album View" width="1280" height="960"/></figure>
          </Gallery>
        </section>

        <article>
          For the visual design, I decided on a dark theme throughout the app from the beginning. The interface is meant to be used exclusively indoors and the dark backgrounds greatly reduce screen glare in dim lighting. To achieve a desired luxurious feel I’ve decided on a palette of golden hues with a bright amber for the main color and a rectangular, somewhat retro-hifi typeface. To accompany that I designed the Mirage icon with a stylized type treatment that meant to look like a capital letter M as seen through a mirage. Unfortunately, the design, while loved by the client, proved to be too far off what the external brand agency had in mind. The corrected result still came out great with warm tones exchanged for brand blue and the nostalgic design cues replaced with a design more reminiscent of the hardware.
        </article>

        <div className="overflow-wrap">
          <section className="paper dark">
            <div className="content">
              <h3>Brand</h3>
              <div>
                <p>While the underlying architecture remained pretty much the same, the shift from my intended design inspired by old hi-fi’s, to one more resembling the updated identity for Mirage, brought an interesting change in its character and reception. The original to the left was described as warmer, more luxurious and homely. The revised to the right, more Apple-like, smarter and sophisticated. I'll let you be the judge of that yourself.</p>
              </div>
            </div>
            <div className="slides static">
              <figure className="card phone comparison">
                <figure className="card phone before"><img src={b7} alt="Original Icon" width="750" height="1334"/></figure>
                <figure className="icon before"><img src={b9} alt="Original Icon" width="368" height="368"/></figure>
                <img src={b6} alt="Mirage Comparison" width="750" height="1334"/>
                <figure className="icon after"><img src={b10} alt="Revised Icon" width="368" height="368"/></figure>
                <figure className="card phone after"><img src={b8} alt="Original Icon" width="750" height="1334"/></figure>
              </figure>
            </div>
          </section>
        </div>

        <article>
          The core idea of the app is to control music playback in the house. Call it a touch-based remote control and you’re not too far off. After some research and sketching out user flows we quickly found out that quick navigation was the most important part in providing a pleasant experience. I’ve prototyped different approaches to handling navigation and in the end opted for thumb-based tab bars and liberal use of gestures. The interface proved to be instantly familiar while making the most frequent interactions easily reachable with a thumb.
        </article>

        <section className="paper dark">
          <div className="content">
            <h3>Prototype</h3>
            <div>
              <p>I’ve created many prototypes like the ones below while working on Mirage. Most of them illustrated a solution to a problem that came out during the design. One such prototype I made was for the multi-selection interface, the part of the app used most often to queue tracks, where you could swipe along multiple table cells in different views while having a persistent bar at the bottom to perform actions on your selection. Needless to say, I’m super stoked about this elegant solution.</p>
            </div>
          </div>
          <div className="slides static">
            <figure className="card phone"><video width="375" height="667" loop autoPlay playsInline><source src={b11} type="video/mp4" /></video></figure>
            <figure className="card phone"><video width="375" height="667" loop autoPlay playsInline><source src={b12} type="video/mp4" /></video></figure>
          </div>
        </section>

        <div className="link-group">
          <ul>
            <li><Link to="/" className="button"><span className="highlighter">Go back</span></Link></li>
            <li><Link to="/itondo/" className="button"><span className="highlighter">Next case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path strokeWidth="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fillRule="evenodd"/></svg></Link></li>
          </ul>
        </div>

        <Credits />

      </main>
    )
  }
}
