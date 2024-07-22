const Email = (props) => {
    return (
        <input 
            type="email"
            name={props.name}
            value={props.value}
            placeholder="Email"
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    );
}

export default Email;