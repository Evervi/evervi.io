import React, { useContext, useRef} from "react";
import cx from "classnames";
import Button from "../shared/Button";

const DEFAULT_CONTEXT_VALUES = { isOpen: false, setOpen: (open: boolean) => {} };
export const DrawerContext = React.createContext(DEFAULT_CONTEXT_VALUES);

export const useDrawer = () => {
    const context = useContext(DrawerContext);

    const ref = useRef<[boolean, (open: boolean) => void] | null>(null);

    if(ref.current === null) {
        const handleState = (newState: boolean) => {
            context.setOpen(!!newState);
        }

        ref.current = [context.isOpen, handleState];
    }
    ref.current[0] = context.isOpen;

    return ref.current as [boolean, (open: boolean) => void];
}

const Drawer = () => {
    const [open, setOpen] = useDrawer();

    const rootClasses = cx("Drawer", { "Drawer--open": open });
    return <>
    <div className={rootClasses} onClick={() => setOpen(false)}>
        <div className="Drawer__Container">
    <h1 onClick={console.log}>evervi</h1>
            <Button brandColor="secondary" onClick={console.log}><i className="fas fa-home"></i> HOME</Button><br />
            <Button brandColor="secondary" onClick={console.log}><i className="fas fa-image"></i> PORTFOLIO</Button>< br />
            <Button brandColor="secondary" onClick={console.log}><i className="fas fa-id-card-alt"></i> CONTACT</Button>
            </div>
        </div>
        </>
}

export default Drawer;