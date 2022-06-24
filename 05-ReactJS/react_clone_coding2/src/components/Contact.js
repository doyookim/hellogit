import React from "react";
import styled from "styled-components";

const ContactWrap = styled.div`
  padding: 0.01em 16px;
  padding-top: 32px !important;
  padding-bottom: 32px !important;

  &:before {
    content: "";
    display: table;
    clear: both;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  h3 {
    border-bottom: 1px solid #ccc !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    border-color: #f1f1f1 !important;
  }

  input {
    width: 100%;
    padding: 8px;
    display: block;
    border: 1px solid #ccc !important;
  }

  .section {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  button {
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    color: #fff !important;
    background-color: #000 !important;

    &:hover {
      color: #000 !important;
      background-color: #ccc !important;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrap>
      <h3>Contact</h3>
      <p>Lets get in touch and talk about your next project.</p>
      <input type="text" placeholder="Name" required name="Name" />
      <input
        className="section"
        type="text"
        placeholder="Email"
        required
        name="Email"
      />
      <input
        className="section"
        type="text"
        placeholder="Subject"
        required
        name="Subject"
      />
      <button type="submit"> SEND MESSAGE</button>
    </ContactWrap>
  );
};

export default Contact;
