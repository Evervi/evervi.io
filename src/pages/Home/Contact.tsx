import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import Icon from '../../components/shared/Icon';
import Flex from '../../components/utils/Flex';



// TODO: Stan ładowania aby użytkownik wiedział, że udało mu się submitować formularz i oczekuje on na dalsze procesowanie...
// TODO: Blokada ponownego wysłania.
// TODO: Recaptcha 
const Contact = () => {

    return <div className="Contact">
        <hr style={{maxWidth: "100%"}} />

        <div className="Contact__Container">
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
}

const ContactInfo = () => {
    return  <div className="Contact__Container__Data">
                <h2>Contact</h2>
                <>
                    <Flex className="Contact__Container__Item" alignItems="center">
                        <Icon name="fas fa-envelope" style={{ fontSize: "24px", margin: "6px", color: "#607d8b" }} /> 
                        support@evervi.io
                    </Flex>

                    <Flex className="Contact__Container__Item" alignItems="center">
                        <Icon name="fab fa-facebook-messenger" style={{ fontSize: "24px", margin: "6px", color: "#0084FF"}} /> 
                        @evervi
                    </Flex>

                    <Flex className="Contact__Container__Item" alignItems="center">
                        <Icon name="fab fa-telegram" style={{ fontSize: "24px", margin: "6px", color: "#0088cc" }} /> 
                        @evervi
                    </Flex>
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
                <Input fluid gutter placeholder="Imię i nazwisko" value={nameField} onChange={setNameField} name="from_name" />
                <Input fluid gutter placeholder="E-mail" value={emailField} onChange={setEmailField} name="from_email" />
                <Input fluid multiline gutter placeholder="Wiadomość" value={messageField} onChange={setMessageField} name="message_html" />

                { errorMessage && <p>{errorMessage}</p> }

                <Button 
                    disabled={formState === "pending"} 
                    iconRight={ <Button.Icon name="fas fa-chevron-right" /> } 
                    brandColor="secondary" 
                    type="submit">SEND</Button>
            </form>
}

const ContactFormSuccess = () => {

    return <div className="Contact__Form__Success">Your message has been sent. We'll reply you as soon as possible!</div>
}

const ContactFormError = () => {

    return <div className="Contact__Form__Error">Error!</div>
}

export default Contact

