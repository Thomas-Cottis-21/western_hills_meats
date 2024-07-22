const Message = (props) => {
    return (
        <textarea
            name={props.name}
            value={props.value}
            placeholder="Message"
            onChange={props.onChange}
            onBlur={props.onBlur}>
        </textarea>
    );
}

export default Message;