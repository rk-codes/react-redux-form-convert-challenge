import React from 'react';
import { reduxForm, Field } from 'redux-form';

export  function ContactForm() {
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <Field name="name" type="text" component="input"/>
            <label htmlFor="email">Email address</label>
            <Field type="email" id="email" name="email" component="input"/>
            <label htmlFor="message">Message</label>
            <Field type="text"  name="message" component="textarea"/>
            <button>Submit</button>
        </form>
    );
}
export default reduxForm({
    form: 'contact'
})(ContactForm)