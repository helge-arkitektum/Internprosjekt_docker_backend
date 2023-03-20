import { useEffect, useRef } from "react";
import style from "./Dialog.module.scss";

function Dialog({ children, open, onClose }) {
    const dialogRef = useRef();
    useEffect(() => {
        open ? dialogRef.current.showModal() : dialogRef.current.close();
    }, [open]);
    return (
        <dialog ref={dialogRef} onClose={onClose} className={style.dialog}>
            {children}
        </dialog>
    );
}

export default Dialog;
