import React, { Component } from "react"
import * as PropTypes from "prop-types"
import favicon from './assets/favicon.png'
import touchImage from './assets/apple-touch-icon-precomposed.png'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Maciej Zadykowicz, Designer</title>
          <meta name="description" content="Website of Maciej Zadykowicz, product designer." />
          <meta name="author" content="Maciej Zadykowicz" />
          <meta name="copyright" content="Maciej Zadykowicz" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Maciej Zadykowicz, Designer" />
          <meta property="og:description" content="I design and build digital products, brands and experiences." />
          <meta property="og:url" content="//maciej.co" />
          <meta property="og:image" content='http://maciej.co/ogimage.4fd8a208.jpg' />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@spaceape" />
          <meta name="twitter:title" content="Maciej Zadykowicz, Designer" />
          <meta name="twitter:description" content="I design and build digital products, brands and experiences." />
          <meta name="twitter:image" content='http://maciej.co/ogimage.4fd8a208.jpg' />
          <meta name="theme-color" content="#141414" />
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon-precomposed" href={touchImage} />
          <link rel="icon" href={touchImage} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
