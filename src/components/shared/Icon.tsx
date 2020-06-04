import React from 'react';
import cx from "classnames";

type IconProps = {
    name: string;
    style?: object;
    className?: string;
};

const Icon = (props: IconProps) => {
    const rootClass = cx( "Icon", props.name, props.className );
    return <i className={ rootClass } style={ props.style } ></i>
}


export default Icon;