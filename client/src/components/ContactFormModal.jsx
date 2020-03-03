import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const contactFormRoot = document.getElementById('app-contact-form');

const ContactFormModalBackground = styled.div`
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 50;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`

class ContactFormModal extends Component {
    constructor(props) {
        super(props);
        this.background = React.createRef();
        this.handleClickOutside.bind(this);
    }

    handleClickOutside(event) {
        if (event.target.className === this.background.current.className) {
            this.props.handleCloseContactForm();
        }
    }

    render() {
        return ReactDOM.createPortal(
            <ContactFormModalBackground onClick={(e) => this.handleClickOutside}>
                {this.props.children}
            </ContactFormModalBackground>,
            contactFormRoot
        );
    }
}

export default ContactFormModal;