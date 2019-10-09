import React from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export const TooltipComponent = (props) => {
    const tooltipText = props.tooltipText;

    const onEnter = () => {
        setTimeout(() => {
            props.setShow(false);
        }, 2000);
    }

    return (
        <Overlay target={props.target.current} show={props.show} placement="right"
            onEntered={onEnter}>
            {props => (
                <Tooltip {...props}>
                    { tooltipText }
                </Tooltip>
            )}
        </Overlay>
    )
}