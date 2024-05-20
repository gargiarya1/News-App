import React, { Component } from 'react'
import loading from './spin.gif'

export default class Spinner extends Component {
  render() {

    const loadingStyle =  ({
    
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      
    
  })
    return (

      
      <div>
          <img style={loadingStyle} src={loading} alt="loding" />
      </div>
    )
  }
}


