const ErrorMessage = ({ message }) => {
    return (
        <div className={message != "" ? "errorMessage" : ""}>
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;