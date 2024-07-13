const Name = (props) => {
    return (
        <input 
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={props.userInputKey}
        />
    );
}

export default Name;