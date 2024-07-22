const Name = (props) => {
    return (
        <input 
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Name"
        />
    );
}

export default Name;