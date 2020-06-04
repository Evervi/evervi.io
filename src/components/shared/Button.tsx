import React from 'react';
import cx from "classnames";
import Ink from 'react-ink'
import Flex from '../utils/Flex';

type ButtonProps = { 
    children: React.ReactNode // Tekst podawany do środka => <Button>TEST</Button>

    color?: string
    onClick?: () => void 
    disabled?: boolean
    
    brandColor?: "primary" | "secondary" | "third" 
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode

    type?: "button" | "submit" | "reset"
}

function Button(props: ButtonProps) {
    const rootClass = cx( "Button", { [`Button__color--${props.brandColor}`]: props.brandColor, "Button--disabled": props.disabled } );

    const iconLeft  = props.iconLeft && React.cloneElement(props.iconLeft as any,{ gutterSide: "right" });
    const iconRight = props.iconRight && React.cloneElement(props.iconRight as any,{ gutterSide: "left" });

    /*const handleClick = () => {
        props.onClick && props.onClick();
    }*/

    return  <button disabled={props.disabled} type={props.type} className={rootClass} style={{ background: props.color }} onClick={ props.onClick }>
                <Flex className="Button__Label" alignItems="center">
                    { iconLeft }
                    {props.children}
                    { iconRight }
                </Flex>
                <Ink />
            </button>
}

type IconProps = {
    name: string;
    gutterSide?: "right" | "left" | "both";
    style?: object;
}

function ButtonIcon(props: IconProps) {
    const rootClass = cx("Button__Icon", props.name, { [`Button__Icon--margin-${props.gutterSide}`]: props.gutterSide });

    return <i className={rootClass} style={props.style}></i>;
}

Button.Icon = ButtonIcon; // <Button.Icon ... /> || <Button iconRight={ <Button.Icon name="..." ... /> }>...</Button>

export default Button;