import React from 'react';
import cx from "classnames";

type IconProps = {
    name: string;
    style?: object;
    className?: string;
    url?: string;
};

const Icon = (props: IconProps) => {
    const rootClass = cx( "Icon", props.name, props.className );
    return <a href={props.url}><i className={ rootClass } style={ props.style } ></i></a>
}


export default Icon;