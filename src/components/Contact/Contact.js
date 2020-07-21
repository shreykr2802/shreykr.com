import React, { useState } from 'react';
import styled from 'styled-components';
import './Contact.css';

import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";

const ContactPage = styled.section`
    background: white;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    text-align: center;
`;

const ContactHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    top: 7vh;
    position: relative;

`;

const Underline = styled.div`
    width: 30%;
    height: 5px;
    background-color: #296c92;
    border-radius: 10px;
    left: 35%;
    position: relative;
    top: 6vh;
`;

const ContactForm = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    position: relative;
    top: 7vh;
`;

const ContactLineItem = styled.div`
    display: flex;
    flex-flow: row;
    width: 30%;

    @media(max-width: 768px){    
        width: 50%;
    }
`;

const ContactLineItemTA = styled.div`
    display: flex;
    flex-flow: row;
    width: 60%;
    height: 10%;
`;

const ContactInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    box-sizing: border-box;
    color: black;
    font-size: 1rem;
`;

const ContactTextArea = styled.textarea`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    box-sizing: border-box;
    color: black;
    font-size: 1rem;
    resize: none;
`;

const ContactButton = styled.button`
    width: 10%;
    height: 30px;
    background: #296c92;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    outline: none;
    border-radius: 15px;
    border: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    @media(max-width: 1024px) {
        width: 20%;
    }

    @media(max-width: 512px) {
        width: 30%;
    }
`;

const ToolTip = styled.div`
    cursor: help;
    &::before {
        position: absolute;
        content: "This is optional. Be assured that it won\'t be shared with anyone else";
        font-family: 'Montserrat', sans-serif;
        font-size: 0.6rem;
        display: none;
        background: gray;
        height: 25px;
        width: 250px;
        color: white;
        border-radius: 20px;
        transform: translate(0, -30px);
    }
    &:hover::before {
        display: block;

    }
`;

const Contact = props => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [validName, setValidName] = useState(false);
    const [validSubject, setValidSubject] = useState(false);
    const [validMessage, setValidMessage] = useState(false);

    const [status, setStatus] = useState(false);

    const inputNameChange = event => {
        const value = event.target.value;
        setValidName(value.length > 0);
        setName(value);
    };

    const inputPhoneChange = event => {
        // var phoneformat = /^\d{10}$/;
        const value = event.target.value;
        // const match = phoneformat.test(value);
        // setValidPhone(match);
        setPhone(value);
    };

    const inputEmailChange = event => {
        // eslint-disable-next-line no-useless-escape
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const value = event.target.value;
        // const match = mailformat.test(value);
        // setValidEmail(match);
        setEmail(value);
    };

    const inputSubjectChange = event => {
        const value = event.target.value;
        setValidSubject(value.length > 0);
        setSubject(value);
    };

    const inputMessageChange = event => {
        const value = event.target.value;
        setValidMessage(value.length > 0);
        setMessage(value);
    };

    const submitContactInformation = event => {
        event.preventDefault();
        if (validName && validSubject && validMessage) {
            const form = event.target;
            const data = new FormData(form);
            data._replyto = email;
            data.message = message;
            data.name = name;
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    setStatus(true);
                } else {
                    setStatus(false);
                }
            };
            xhr.send(data);
        } else {
            if (!validName) {
                shakeInvalidInput("name");
            }
            if (!validSubject) {
                shakeInvalidInput("subject");
            }
            if (!validMessage) {
                shakeInvalidInput("message");
            }
        }
    };

    const shakeInvalidInput = (name) => {
        const element = document.getElementById(name);
        element.classList.add("invalid");
        setTimeout(() => {
            element.classList.remove("invalid");
        }, 200);
    }

    return (
        <ContactPage ref={ props.contact }>
            <ContactHeading>Feel free to contact me!</ContactHeading>
            <Underline />
            <ContactForm onSubmit={ submitContactInformation } action="https://formspree.io/moqkqkgo" method="POST">
                <ContactLineItem id="name" className="contactInput">
                    <ContactInput placeholder="Name" value={ name } onChange={ inputNameChange } type="text" name="name" />
                    { validName ? <FaCheck color="green" size="1rem" /> : <FaTimes color="red" size="1rem" /> }
                </ContactLineItem>
                <ContactLineItem id="phone" className="contactInput">
                    <ContactInput placeholder="Phone" value={ phone } onChange={ inputPhoneChange } type="text" maxLength="10" name="phone" />
                    <ToolTip><FaInfoCircle size="1rem" color="#296c92" /></ToolTip>
                </ContactLineItem>
                <ContactLineItem id="email" className="contactInput">
                    <ContactInput placeholder="Your Email" value={ email } onChange={ inputEmailChange } type="email" name="email" />
                    <ToolTip><FaInfoCircle size="1rem" color="#296c92"/></ToolTip>
                </ContactLineItem>
                <ContactLineItem id="subject" className="contactInput">
                    <ContactInput placeholder="Subject" value={ subject } onChange={ inputSubjectChange } type="text" name="subject" />
                    { validSubject ? <FaCheck color="green" size="1rem" /> : <FaTimes color="red" size="1rem" /> }
                </ContactLineItem>
                <ContactLineItemTA id="message" className="contactInput">
                    <ContactTextArea placeholder="Message" value={ message } onChange={ inputMessageChange } name="message" />
                    { validMessage ? <FaCheck color="green" size="1rem" /> : <FaTimes color="red" size="1rem" /> }
                </ContactLineItemTA>
                <ContactButton>
                    CONTACT { ' ' }
                    { status ? <FaCheck size="1rem" /> : <FaTimes size="1rem" /> }
                </ContactButton>
            </ContactForm>
        </ContactPage>
    );
};

export default Contact;