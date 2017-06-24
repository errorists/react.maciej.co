import React from 'react'
import Link from "gatsby-link"
import Navigation from '../components/Navigation'

var divStyle = {
  width:'100vw',
  height:'100vh',
	display:'flex',
	justifyContent:'center',
	alignItems:'center'
};

var linkStyle = {
  width:'100%',
  textAlign:'center',
  margin:'0',
}

export default class Index extends React.Component {
  render() {
    return (
      <main>
        <div style={divStyle}>
          <div>
            <h3>404</h3>
            <Link style={linkStyle} to="/" className="button"><span className="highlighter">Home</span></Link>
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </main>
    )
  }
}
