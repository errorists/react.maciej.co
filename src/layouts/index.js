import React from 'react'
import * as PropTypes from "prop-types"
import Link from "gatsby-link"
import '../css/main.scss'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        {this.props.children()}
      </div>
    )
  }
}
