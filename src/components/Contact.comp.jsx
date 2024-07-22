import { useEffect, useState } from "react";
import Email from "./form/Email.comp.jsx";
import Name from "./form/Name.comp.jsx";
import Message from "./form/Message.comp.jsx";
import ErrorMessage from "./form/ErrorMessage.comp.jsx";

const Contact = () => {

    const [loading, setLoading] = useState(false);
    
    const [errors, setErrors] = useState({});

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
        //TODO check if touched here, if so, validate on change
    }

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));
        //TODO validate here
    }

    return (
        <section className="contact">
            <h1 className="title">We are here to help</h1>
            <p className="subtitle">Don't be shy! Shoot us an email via the form below and we'll get back to you shortly</p>
            <form className="userContact">

                <ErrorMessage message={"error message"} />
                <Name 
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}/>

                <ErrorMessage  message={"error message"} />
                <Email />
                <ErrorMessage message={"error message"} />
                <Message />
            </form>
            <div className="formControl">
                <button>Send</button>
            </div>
        </section>
    );
}

export default Contact;