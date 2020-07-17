import React, { useState } from 'react';
import translations from '../../translations/pages';
import { useLittera } from 'react-littera';

import emailjs from 'emailjs-com';

import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import ContactInfoItem from './ContactInfoItem';




// TODO: Stan ładowania aby użytkownik wiedział, że udało mu się submitować formularz i oczekuje on na dalsze procesowanie...
// TODO: Blokada ponownego wysłania.
// TODO: Recaptcha 
const Contact = (props: {displayHr?: boolean}) => {

    return <div className="Contact">
        {props.displayHr && <hr style={{maxWidth: "100%"}} />}

        <div className="Contact__Container">
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
}

const ContactInfo = () => {
    const translated = useLittera(translations);
    return  <div className="Contact__Container__Data">
                <h2>{translated.contactTitle}</h2>
                <>

                    <ContactInfoItem url="https://google.com" iconColor="#607d8b" icon="fas fa-envelope" text="support@evervi.io" />
                    <ContactInfoItem url="https://google.com" iconColor="#0084FF" icon="fab fa-facebook-messenger" text="@evervi" />
                    <ContactInfoItem url="https://google.com" iconColor="#0088cc" icon="fab fa-telegram" text="@evervi" />
                </>
            </div>
}

const ContactForm = () => {
    // Stan komponentu dla wprowadzonych zmian w inpucie: imię i nazwisko... 
    // pierwszy element to ustawiona wartość a drugi to funkcja, która zmienia wartość.
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [messageField, setMessageField] = useState("");
    
    const [formState, setFormState] = useState<"success" | "error" | "init" | "pending">("init"); // init => pending => success / error
    const [errorMessage, setErrorMessage] = useState("");

    const translated = useLittera(translations);

    const handleSubmit = (e: any) => {
        setFormState("pending");
        e.preventDefault();

        if(!nameField || !emailField || !setMessageField) {
            setErrorMessage("Need to fill all fields.");
            setFormState("init");
            return;
        }

        setErrorMessage("");

        emailjs.sendForm('gmail', 'template_ChzlJ3RD', e.target, process.env.REACT_APP_USER_ID)
            .then(() => {
                setFormState("success");
            }, () => {
                setFormState("error");
            })
    }

    if(formState === "success")
        return <ContactFormSuccess />
    
    if(formState === "error")
        return <ContactFormError />

        
    return  <form onSubmit={handleSubmit} className="Contact__Container__Form">
                <Input fluid gutter placeholder={translated.inputContactName} value={nameField} onChange={setNameField} name="from_name" />
                <Input fluid gutter placeholder="E-mail" value={emailField} onChange={setEmailField} name="from_email" />
                <Input fluid multiline gutter placeholder={translated.inputContactMessage} value={messageField} onChange={setMessageField} name="message_html" />

                { errorMessage && <p>{errorMessage}</p> }

                <Button 
                    disabled={formState === "pending"} 
                    iconRight={ <Button.Icon name="fas fa-chevron-right" /> } 
                    brandColor="secondary" 
                    type="submit">{translated.sendMessageButton}</Button>
            </form>
}

const ContactFormSuccess = () => {
    const translated = useLittera(translations);

    return <div className="Contact__Form__Success">{translated.contactFormSuccess}</div>
}

const ContactFormError = () => {

    return <div className="Contact__Form__Error">Error!</div>
}

export default Contact

