import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UploadComponent.module.css';

class UploadComponent extends Component {
  dropRef = React.createRef();


  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }


  componentDidMount() {
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
