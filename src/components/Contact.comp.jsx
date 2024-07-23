import { useEffect, useState } from "react";
import Email from "./form/Email.comp.jsx";
import Name from "./form/Name.comp.jsx";
import Message from "./form/Message.comp.jsx";
import ErrorMessage from "./form/ErrorMessage.comp.jsx";
import validationRules from "../util/formValidation.util.js";
import sendContactRequest from "../util/sendContactMessage.util.js";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        console.log(values);
    }, [values]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
        if (touched[name]) {
            validate(name, value);
        }
    }

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));
        validate(name, values[name]);
    }

    const handleContactRequest = async () => {
        const contactResponse = await sendContactRequest(values);

        console.log(contactResponse);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        setTouched({
            name: true,
            email: true,
            message: true
        });

        const updatedErrorList = {};
        Object.entries(values).forEach(([key, value]) => {
            const errorMessage = validate(key, value);
            updatedErrorList[key] = errorMessage;
        })

        setErrors(updatedErrorList);

        if (!Object.values(updatedErrorList).some(value => value)) {
            await handleContactRequest();
        } else {
            setLoading(false);
            console.log("errors were present", updatedErrorList);
        }
    }

    const validate = (name, value) => {

        let fieldError = validationRules[name](value);

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: fieldError
        }))

        return fieldError;

    }

    return (
        <section className="contact">
            <h1 className="title">We are here to help</h1>
            <p className="subtitle">Don't be shy! Shoot us an email via the form below and we'll get back to you shortly</p>
            <form className="userContact">

                <div className="dataGroup">
                    <ErrorMessage message={errors.name ? errors.name : ""} />
                    <Name 
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>

                <div className="dataGroup">
                    <ErrorMessage  message={errors.email ? errors.email : ""} />
                    <Email 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>

                <div className="dataGroupWide">
                    <ErrorMessage message={errors.message ? errors.message : ""} />
                    <Message 
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>

            </form>
            <div className="formControl">
                <button onClick={handleSubmit}>Send</button>
            </div>
        </section>
    );
}

export default Contact;