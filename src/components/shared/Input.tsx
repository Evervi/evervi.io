import React from 'react';
import cx from "classnames";


type InputProps = {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    gutter?: boolean;
    multiline?: boolean;
    name?: string;
};

const Input = (props: InputProps) => {

    const handleChange = (event: any) => {
        props.onChange(event.target.value as string);
    }

    const inputClass = cx("Input", { "Input--gutter": props.gutter, "Input--multiline": props.multiline });

    const elTag = props.multiline ? "textarea" : "input";

    return React.createElement(elTag,
                    { className: inputClass, placeholder: props.placeholder, value: props.value, onChange: handleChange, name: props.name });
}


export default Input;