import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UploadComponent.module.css';

class UploadComponent extends Component {
  dropRef = React.createRef();


  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  state = {
    dragging: false
  }

  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.dragCounter++

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true })
    }
  }

  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()

    this.dragCounter--

    // If child elements present within drag 'n drop
    // counter will prevent re-rendering on trigger of handleDragOut
    // within child components
    if (this.dragCounter > 0) return

    this.setState({ dragging: false })
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }


  componentDidMount() {

    this.dragCounter = 0

    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addeventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addeventListener('drop', this.handleDrop)
  }

  render() {
    return(<div ref={this.dropRef}>
      {this.props.children}
    </div>);
  }
}
export default UploadComponent;
