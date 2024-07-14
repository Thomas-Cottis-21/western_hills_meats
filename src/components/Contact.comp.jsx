import Email from "./form/Email.comp.jsx";
import Name from "./form/Name.comp.jsx";
import Message from "./form/Message.comp.jsx";

const Contact = () => {
    return (
        <section className="contact">
            <h1 className="title">We are here to help</h1>
            <p className="subtitle">Don't be shy! Shoot us an email via the form below and we'll get back shortly</p>
            <form className="userContact">
                <Name />
                <Email />
                <Message />
            </form>
            <div className="formControl">
                <button>Send</button>
            </div>
        </section>
    );
}

export default Contact;