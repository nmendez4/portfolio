import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Subtmit Form', formState)
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState)
        }
    };

    return (
        <div>
            <p className="card">Contact Me</p>
            <p className="card">Please include your full name and a message below, thank you!</p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email:</label>
                    <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message:</label>
                    <input className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange}></input>
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button" data-testid="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;

// want to be able to have forms send data input on contact page to email 
// or send some kind of notification
// documentation https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript


// more documentation https://codepen.io/hubspot/pen/abYWrOz 
// action="mailto:nicholas.e.mendez5@gmail.com" method="POST" encType="text/plain" name="EmailForm"

// more documentation
// https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190