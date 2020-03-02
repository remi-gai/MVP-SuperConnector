import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const matchesRoot = document.getElementById('app-matches');

class MatchesModal extends Component {
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
            matchesRoot
        );
    }
}

export default MatchesModal;