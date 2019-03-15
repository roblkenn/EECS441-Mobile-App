import React, { Component } from 'react'
import SlidingPanel from './SlidingPanel';
import Body from './Body'
import Header from './Header'
import { Haptic } from 'expo';

export default class MoreImages extends Component {
  constructor (props) {
    super(props)
    this.onRef = this.onRef.bind(this)
    this.simulateClick = this.simulateClick.bind(this)
  }

  onRef(childThis) {
    this.childFunctions = childThis
  }

  simulateClick() {
    this.childFunctions.onRequestClose()
  }

  render () {
    return (
      <SlidingPanel 
        headerLayoutHeight={100}
        headerLayout={()=><Header/>}
        slidingPanelLayout={r=><Body {...this.props} simulateClick={this.simulateClick}/>}
        AnimationSpeed={250}
        onRef={this.onRef}
        panelPosition='top'
        onAnimationStop={()=>Haptic.impact('medium')}
      >
      </SlidingPanel>
    )
  }
}

