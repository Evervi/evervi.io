import React from 'react';
import Ink from 'react-ink'

type Props = { 
    children: React.ReactNode // Tekst podawany do środka => <Button>TEST</Button>

    color?: string
    onClick: () => void 

    brandColor?: "primary" | "secondary" | "third" 
}

function Button(props: Props) {
    let className = "Button";

    if(props.brandColor) {
        className += ` Button__color--${props.brandColor}`;
    }

    return  <button className={className} style={{ background: props.color }} onClick={ props.onClick }>
                {props.children}
                <Ink />
            </button>
}

export default Button;