import React from 'react';

let ContactForm = (props) => (
  <div>
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
  </div>
)

export default ContactForm;