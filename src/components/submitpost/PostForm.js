import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required field')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength200 = minLength(200)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const renderField = ({
  input,
  label,
  type,
  value,
  options,
  radiolabel,
  placeholder,
  maxlength,
  meta: { touched, error, warning }
}) =>
  <span className="field">
      { type == 'radio' && (
        <span>
          <label>
            <input {...input} type={type} />
            {radiolabel}
          </label>
        </span>
      )}
      { type == 'select' && (
        <select {...input}> 
          {options} 
        </select>
      )}
      { type == 'textarea' && (
        <textarea {...input} placeholder={placeholder} maxLength={maxlength}></textarea>
      )}
      { type == 'text' && (
        <input {...input} placeholder={placeholder} type={type} />
      )}  
      {touched &&
        ((error &&
          <span className="error">
            {error}
          </span>) ||
          (warning &&
            <span className="warning">
              {warning}
            </span>))}
  </span>

const PostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  
  let age = [];
  age.push(<option key="0">Select</option>);
  for( var i=18; i<=100; i++ ){
    age.push(<option key={i}>{i}</option>);
  }

  return (

    <form onSubmit={handleSubmit} className="post-form" name="post">
      <div className="form-container">
        <div className="row">
          <div className="form-header">Express and Find your Match</div>
        </div>
        <div className="row">
          <div className="field-label">Age</div>
          <div className="field-content">
            <Field 
              name="age" 
              type="select"
              component={renderField}
              options={age}
            />
          </div>
        </div>
        <div className="row">
          <div className="field-label">Gender</div>
          <div className="field-content">
            <Field 
              name="gender"
              type="radio"
              component={renderField}
              value="male"
              radiolabel="Male"
            />
            <Field 
              name="gender"
              type="radio"
              component={renderField}
              value="female"
              radiolabel="Female"
            />
          </div>
        </div>
        <div className="row">
          <div className="field-label">City</div>
          <div className="field-content">
            <Field
              name="city"
              type="text"
              component={renderField}
              placeholder="Enter your city"
              validate={[required, maxLength15]}
              warn={alphaNumeric}
            />
          </div>
        </div>
        <div className="row">
          <div className="field-label">Let your creative minds take off, Express!</div>
          <div className="field-content">
            <Field
              name="content"
              type="textarea"
              component={renderField}
              maxlength="500"
              placeholder="Tell us about yourself and your expectations..."
              validate={[required, minLength200]}
            />
          </div>
        </div>
        <div className="row">
          <button className="submit">Express</button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'postform' // a unique identifier for this form
})(PostForm)