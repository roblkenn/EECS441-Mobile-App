import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Controls from './Controls'
import CurrentImage from './CurrentImage'
import EditSlider from './EditSlider'
import { Haptic } from 'expo'
import AutoEdit from './AutoEdit'
import colors from '../../0-base/colors'
import { UndoButton, RedoButton } from './UndoButton'

export default class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contrast: 50,
      brightness: 50,
      highlights: 50,
      saturation: 50,
      temperature: 50,
      previousValue: null,
    }
    this.setActiveSlider = this.setActiveSlider.bind(this)
    this.onSlide = this.onSlide.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleRedo = this.handleRedo.bind(this)
    this.handleUndo = this.handleUndo.bind(this)
  }

  // when user clicks a toggle, we remember which one was clicked
  // show a new menu, and remember the original value if cancelled
  setActiveSlider (activeSlider) {
    this.props.updateEditor(activeSlider)
    this.setState({ previousValue: this.state[activeSlider] })
  }

  // changes the variables in state for each slider
  onSlide (val) {
    let state = {}
    state[this.props.activeSlider] = val
    this.setState(state)
  }

  // handle save and reset active editor to null
  handleSave () {
    Haptic.impact('heavy')
    this.props.updateEditor(null)
    this.setState({ previousValue: null })
  }

  // handle cancel, reset active editor, returns to previous value
  handleCancel () {
    Haptic.impact('light')
    this.props.updateEditor(null)
    let state = { previousValue: null }
    state[this.props.activeSlider] = this.state.previousValue
    this.setState(state)
  }

  handleUndo () {
    Haptic.impact('light')
  }

  handleRedo () {
    Haptic.impact('light')
  }

  // gets the value of the currently selected toggle
  get activeSliderValue () {
    return this.state[this.props.activeSlider]
  }

  /*
    RENDER FUNCTIONS
  */

  renderAutoEdit () {
    return this.props.activeSlider ? null : <AutoEdit />
  }

  renderUndoRedoButtons () {
    if (this.props.activeSlider) return null
    return (
      <View style={styles.undoRedo}>
        <UndoButton onPress={this.handleUndo} />
        <RedoButton onPress={this.handleRedo} />
      </View>
    )
  }

  renderSlider () {
    if (!this.props.activeSlider) return null
    return <EditSlider onSlide={this.onSlide} value={this.activeSliderValue} />
  }

  // shows the image being edited, controls, and edit slider if active
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <CurrentImage src={this.props.image} />
          {this.renderUndoRedoButtons()}
        </View>
        <Controls
          name={this.props.activeSlider}
          onClick={this.setActiveSlider}
          onCancel={this.handleCancel}
          onSave={this.handleSave}
        />
        {this.renderAutoEdit()}
        {this.renderSlider()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    position: 'relative'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 490
  },
  undoRedo: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
    flexDirection: 'row'
  }
})
