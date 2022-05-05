import React, { Component } from 'react'


class BackgroundCanvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id } = this.props

    return <canvas id={id} className="background-canvas"></canvas>
  }
}

export default BackgroundCanvas
