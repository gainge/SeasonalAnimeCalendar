import React, { Component } from 'react'

import ReactModal from 'react-modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ReactModal.setAppElement('#root');

const styles = {
  overlay: {
    backgroundColor: 'transparent',
    padding: 100,
  },
  content: {
    position: 'relative',
    color: 'red',
    boxShadow: '1px 3px 3px #9E9E9E',
    backgroundColor: '#f8f8f8',
  }
};

export default class ErrorModal extends Component {
  render() {
    return (
      <ReactModal 
        isOpen={this.props.isOpen} 
        onRequestClose={this.props.onCloseModal}
        style={{ overlay: styles.overlay, content: styles.content }}
      >
        <FontAwesomeIcon icon={faTimes} size="2x" style={{ color: 'slate', float: 'right' }} onClick={this.props.onCloseModal} />
        <p>{this.props.errorMessage}</p>
      </ReactModal>
    )
  }
}
