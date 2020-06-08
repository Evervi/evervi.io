import React from 'react';
import cx from "classnames";


type InputProps = {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    gutter?: boolean;
    multiline?: boolean;
    name?: string;
    fluid?: boolean;
};

const Input = (props: InputProps) => {

    const handleChange = (event: any) => {
        props.onChange(event.target.value as string);
    }

    const inputWrapperClass = cx("Input", { "Input--gutter": props.gutter, "Input--fluid": props.fluid });
    const inputClass = cx("Input__element", { "Input--multiline": props.multiline });

    const elTag = props.multiline ? "textarea" : "input";

    return <div className={inputWrapperClass}>
        { React.createElement(elTag,
                    { className: inputClass, placeholder: props.placeholder, value: props.value, onChange: handleChange, name: props.name }) }
    </div>
}


export default Input;