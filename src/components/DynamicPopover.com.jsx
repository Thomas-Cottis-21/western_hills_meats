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
        <OverlayTrigger trigger="hover" placement={"bottom"} overlay={popover}>
            <p>Store Hours</p>
        </OverlayTrigger>
    );
}

export default DynamicPopover;