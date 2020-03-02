import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const meetingNotesRoot = document.getElementById('app-meeting-notes');

class MeetingNotesModal extends Component {
    constructor(props) {
        super(props);
        this.background = React.createRef();
        this.handleClickOutside.bind(this);
    }

    handleClickOutside(event) {
        if (event.target.className === this.background.current.className) {
            this.props.handleCloseModal();
        }
    }

    render() {
        return ReactDOM.createPortal(
            <div onClick={(e) => this.handleClickOutside}>
                {this.props.children}
            </div>,
            meetingNotesRoot
        );
    }
}

export default MeetingNotesModal;