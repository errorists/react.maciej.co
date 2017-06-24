import React from 'react'
import Slick from 'react-slick'

class Gallery extends React.Component {
  render() {
    var settings = {
    	dots: true,
    	infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
    	customPaging: function(i) {
    	   return <span />
    	}
    }
    return (
      <Slick className="slides gallery" {...settings}>
        {this.props.children}
      </Slick>
    )
  }
}

export default Gallery
