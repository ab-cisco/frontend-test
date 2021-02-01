import React from 'react';

import './input-form.component.scss'

const FormInput = ({
    label, 
    description, 
    isValidated,
    ...otherProps
  }) => (
  <div className="form-group">
    <label className='form-input-label'>{label}</label>
    <input className="form-input" {...otherProps}/>
    <span className={`form-input-description ${!isValidated ? '' : 'error'}`}>
    {
      isValidated ? isValidated : description
    }
    </span>
  </div>
)

export default FormInput;
