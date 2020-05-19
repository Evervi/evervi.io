import React from "react"
import cx from "classnames";
import Ink from "react-ink";
import Flex from "../utils/Flex";

type DrawerButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    active?: boolean;
    icon?: React.ReactNode;
}

const DrawerButton = ({ onClick, children, active=false, icon }: DrawerButtonProps) => {
    
    const handleClick = () => {
        onClick();
    }

    const btnClass = cx("DrawerButton", { "DrawerButton--active": active });
    return <div className="DrawerButton-Wrapper">
            <button className={btnClass} onClick={handleClick}>
                <Flex justifyContent="flex-start" alignItems="center" >
                    <div className="DrawerButton__Icon">{icon}</div> 
                    <div className="DrawerButton__Children">{children}</div>
                </Flex>
                <Ink />
            </button>        
        </div>
}

export default DrawerButton;