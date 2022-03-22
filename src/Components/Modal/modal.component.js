import React, { useEffect, useRef } from "react";
import "./modal.css";

const Modal = ({ children, show }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add("visible");
    } else {
      modalRef.current.classList.remove("visible");
    }
  }, [show]);
  return (
    <React.Fragment>
      <div ref={modalRef} className="modal__wrap">
        <div className="modal">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
