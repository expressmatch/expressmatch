import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
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
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const PostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  
  let age = [];
  for( var i=18; i<=100; i++ ){
    age.push(<option key={i}>{i}</option>);
  }

  return (

    <form onSubmit={handleSubmit} className="post-form" name="proposal">
      <div className="form-container">
        <div className="row">
          <div className="form-header">Express and Find your Match</div>
        </div>
        <div className="row">
          <div className="field-name">Age</div>
          <div className="field-value">
            <Field name="sex" component="select">
              {age}
            </Field>
          </div>
        </div>
        <div className="row">
          <div className="field-name">Gender</div>
          <div className="field-value">
            <label>
              <input type="radio" name="gender" value="male" />
                <span>Male</span>
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
                Female
            </label>
          </div>
        </div>
        <div className="row">
          <div className="field-name">City</div>
          <div className="field-value"><input type="text" placeholder="Enter your city"/>
            <Field
              name="city"
              type="text"
              component="text"
              label="city"
              validate={[required, maxLength15, minLength2]}
              warn={alphaNumeric}
            />
          </div>
        </div>
        <div className="row">
          <div className="field-name">Let your creative minds take off, Express!</div>
          <div className="field-value">
            <textarea maxLength="500" placeholder="Tell us about yourself and your expectations..."/>
          </div>
        </div>
        {/*<div className="row">
          <div className="field-name">Name</div>
          <div className="field-value"><input type="text"/></div>
        </div>
        <div className="row">
          <div className="field-name">Email</div>
          <div className="field-value"><input type="text"/></div>
        </div>
        <div className="row">
          <div className="field-name">Phone</div>
          <div className="field-value"><input type="text"/></div>
        </div>*/}
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