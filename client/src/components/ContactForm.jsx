import React from 'react';
import styled from 'styled-components';

const CloseButtonContactForm = styled.div`
    cursor: pointer;
`

const ContactFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: white;
  border: solid 1px black;
`

let ContactForm = (props) => (
  <ContactFormLayout>
    <CloseButtonContactForm onClick={props.handleCloseContactForm}>
      X Close
    </CloseButtonContactForm><br></br>
    <label>
      Full Name:
          <input type="text" onChange={props.handleNameChange} />
    </label><br></br>
    <label>
      Memo:
          <textarea onChange={props.handleMemoChange} />
    </label><br></br>
    <label>
      Position:
          <input type="text" onChange={props.handlePositionChange} />
    </label><br></br>
    <label>
      Company:
          <input type="text" onChange={props.handleCompanyChange} />
    </label><br></br>
    <label>
      Location:
          <input type="text" onChange={props.handleLocationChange} />
    </label><br></br>
    <label>
      Closeness:
          <input type="text" onChange={props.handleClosenessChange} />
    </label><br></br>
    <label>
      Category:
          <input type="text" onChange={props.handleCategoryChange} />
    </label><br></br>
    <label>
      Industry:
          <input type="text" onChange={props.handleIndustryChange} />
    </label><br></br>
    <label>
      Last Spoke:
          <input type="text" onChange={props.handleLastSpokeChange} />
    </label><br></br>
    <button onClick={props.handleContactFormSubmit}>Save</button>
  </ContactFormLayout>
)

export default ContactForm;