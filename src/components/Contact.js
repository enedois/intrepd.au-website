import { React, useState, useRef } from 'react'
import './Contact.css'
import 'bulma/css/bulma.min.css';
import emailjs from '@emailjs/browser';

//re_XEyx335E_9z8qJ1CNWaJwwjmp99JLrJcc


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_iiukf74', 'template_0ih9mnv', form.current, 'Na4ugZ4Mz7ioVIMXR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div class="columns">
            <div className="column is-3"></div>
            <div class="column is-6">
                <form ref={form} action="" onSubmit={handleSubmit}>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input name="user_name" class="input" type="text" placeholder="Text input" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input name="user_email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Subject</label>
                        <div class="control">
                            <div class="select">
                                <select name="subject" onChange={(e) => setSubject(e.target.value)}>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea name="message" class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>

                    <div class="field ">
                        <div class="control">
                            <input class="button is-link" type='submit' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact