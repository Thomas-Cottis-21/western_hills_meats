const Email = (props) => {
    return (
        <input 
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={props.userInputKey}
        />
    );
}

export default Email;