import React from "react";
import styled from "styled-components";

const ContactSectionWrap = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  padding: 0.01em 16px;

  p.grey {
    font-size: 18px;
    color: #607d8b;
  }

  input {
    padding: 8px;
    display: block;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  button {
    color: #000;
    background-color: #f1f1f1;
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionWrap>
      <h1>Contact</h1>
      <br />
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="grey">
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
      </p>
      <p>
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>

      <form>
        <p>
          <input type="text" placeholder="Name" required name="Name"></input>
        </p>
        <p>
          <input
            type="number"
            placeholder="How many people"
            required
            name="People"
          />
        </p>

        <p>
          <input
            type="datetime-local"
            placeholder="Date and time"
            required
            name="date"
            value="2020-11-16T20:00"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Message \ Special requirements"
            required
            name="Message"
          />
        </p>
        <p>
          <button type="submit">SEND MESSAGE</button>
        </p>
      </form>
    </ContactSectionWrap>
  );
};

export default ContactSection;
