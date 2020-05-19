import React, { useContext, useRef} from "react";
import cx from "classnames";
import DrawerButton from "./DrawerButton";
import { useHistory } from "react-router-dom";
import Flex from "../utils/Flex";
import Portal from "../utils/Portal";


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
    return <Portal mountId="drawer-root">
        { open && <div onClick={() => setOpen(false)} className="Drawer__Backdrop" /> }

        <div className={rootClasses}>
            <DrawerContent setOpen={setOpen} />
        </div>
    </Portal>
}

const DrawerContent = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
    const history = useHistory();

    const handleNavigate = ( path: string ) => () => {
        history.push(path);
        setOpen(false);
    }

    const pathName = history.location.pathname;
    
    return <Flex className="Drawer__Container" flexDirection="column" justifyContent="space-between">
            <h1 style={{ padding: "15px 0" }} onClick={console.log}>evervi</h1>
            <div style={{flex: 1}}>
                <DrawerButton active={pathName === "/"} icon={<i className="fas fa-home"></i>} onClick={handleNavigate("/")} >Home</DrawerButton>
                <DrawerButton active={pathName === "/projects"} icon={<i className="fas fa-image"></i>} onClick={handleNavigate("/projects")} >Portfolio</DrawerButton>
            </div>
        </Flex>
}

export default Drawer;