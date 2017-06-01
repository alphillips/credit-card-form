import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({

  onChange(value){
    console.log(value)
  },

  render() {
    return <div>
      <h1>credit-card-form Demo</h1>
      <Component onChange={this.onChange}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
