import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children, mountId}: {children: React.ReactNode, mountId: string}) => {
  const mount = document.getElementById(mountId);
  const el = document.createElement("div");

  useEffect(() => {
    if(mount) {
        mount.appendChild(el);
    }
    return () => { mount && mount.removeChild(el) };
  }, [el, mount]);

  return createPortal(children, el)
};

export default Portal;