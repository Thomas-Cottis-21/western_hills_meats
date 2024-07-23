import { Button, Modal } from "react-bootstrap";

const ContactModal = ({ show, handleClose, success }) => {

    

    return (
        <>
            <Modal 
            className={success ? "success" : "error"} 
            show={show} 
            onHide={handleClose}
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>{success ? "Message Sent!" : "Error, message not sent"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {success
                        ? "Your message was sent successfully! Please allow 24 hours for us to reply" 
                        : 
                        "An error occurred while sending your message. Please try again later or call us at +1 385 899 8586"}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactModal;