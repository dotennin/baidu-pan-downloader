import styled from 'styled-components/macro'

const FormField = styled.fieldset`
  clear: both;
  overflow: hidden;
  padding: 1px;
  margin: 0 0 10px 0;
  border: 0;

  > label,
  legend {
    width: 25%;
    float: left;
    padding-right: 10px;
    font-size: 90%;
    color: #000;
  }
  & > *:nth-child(2) {
    width: 75%;
    float: right;
  }
  @media (min-width: 1200px) {
    & > label,
    legend {
      text-align: right;
    }
  }

  @media (max-width: 600px) {
    margin: 0 0 15px 0;
    & > label,
    legend {
      width: 100%;
      float: none;
      margin: 0 0 5px 0;
    }
    & > *:nth-child(2) {
      width: 100%;
      float: none;
    }
    input[type='text'],
    input[type='email'],
    input[type='url'],
    input[type='password'],
    textarea,
    select {
      width: 100%;
    }
  }
`
const Form = styled.form`
  text-align: left;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
  padding: 5px;
  font-family: sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  & * {
    box-sizing: border-box;
  }

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'],
  textarea {
    width: 100%;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'] {
    width: 50%;
  }
  input[type='checkbox'] {
    transform: scale(1.2);
  }
  select {
    min-width: 50px;
  }
  input[type='text']:focus,
  input[type='email']:focus,
  input[type='url']:focus,
  input[type='password']:focus,
  textarea:focus {
    outline: 0;
    border-color: #4697e4;
  }
`

export { Form, FormField }
