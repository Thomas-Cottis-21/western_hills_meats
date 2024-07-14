const Email = (props) => {
    return (
        <input 
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={props.userInputKey}
        />
    );
}

export default Email;