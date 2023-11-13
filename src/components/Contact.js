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
                form.current.reset();
                const notification = document.getElementById('notification');
                notification.classList.remove('is-hidden');

            }, (error) => {
                console.log(error.text);
            });
    }

    const close = () => {
        const notification = document.getElementById('notification');
        notification.classList.add('is-hidden');
      }

    return (
        <>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Contact us    </p>
                    <p class="subtitle">
                    </p>
                </div>
            </section>
            <section class="section">
                <div class="columns">
                
                    <div class="column is-three-fifths is-offset-one-fifth">
                        <form ref={form} action="" onSubmit={handleSubmit}>
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input name="user_name" required class="input" type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input required name="user_email" class="input" type="email" placeholder="e.g. email@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Subject</label>
                                <div class="control">
                                    <div class="select">
                                        <select required name="subject" onChange={(e) => setSubject(e.target.value)}>
                                            <option>I want a website</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea name="message" class="textarea" placeholder="Your message"></textarea>
                                </div>
                            </div>

                            <div class="field ">
                                <div class="control">
                                    <input class="button is-link" type='submit' />
                                </div>

                            </div>
                            <div id='notification' class="notification is-primary is-hidden" >
                                <div class="delete" onClick={close}></div>
                                <strong>Thanks for contacting</strong>, we will reach out to you soon!
                                </div>
                        </form>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Contact