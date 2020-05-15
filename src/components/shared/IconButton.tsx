import React from "react";
import cx from "classnames";
import Ink from "react-ink";

type IconButtonProps = {
    name: string;
    size?: "normal" | "small";
    color?: string;
    onClick?: () => void
}

const IconButton = ({ name, size="normal", color, onClick }: IconButtonProps) => {

    const handleClick = () => {
        onClick && onClick();
    }

    const rootClasses = cx(
                "IconButton",
                { "IconButton--small": size === "small" });

    return <div onClick={handleClick} className={rootClasses} style={{ color }}>
        <i className={name}></i>
        <Ink />
    </div>
}

export default IconButton;