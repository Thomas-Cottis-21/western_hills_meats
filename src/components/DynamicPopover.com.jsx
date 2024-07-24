import { OverlayTrigger, Popover } from "react-bootstrap";

const DynamicPopover = (props) => {
    
    const popover = (
        <Popover>
            <Popover.Header>
                {props.title}
            </Popover.Header>
            <Popover.Body>
                {props.content}
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger={props.trigger} placement={props.placement} overlay={popover}>
            <p className="topbar">{props.title}</p>
        </OverlayTrigger>
    );
}

export default DynamicPopover;