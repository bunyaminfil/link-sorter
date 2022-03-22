import React, { useState } from "react";
import { removeLink } from "../../Utils/storage.util";
import LinkItem from "../LinkItem/linkItem.component";
import Modal from "../Modal/modal.component";

const List = (props) => {
  const [show, setShow] = useState(false);
  const [removeValue, setRemoveValue] = useState({});
  const removeAlert = (value) => {
    setShow(true);
    setRemoveValue(value);
  };
  const cancelCloseModal = () => {
    setShow(false);
  };
  const okCloseModal = () => {
    removeLink(removeValue.link);
    setShow(false);
    props.refreshLinks();
    setTimeout(() => {
      alert(removeValue.title + " removed.");
    }, 1000);
  };
  return (
    <React.Fragment>
      {props.list.map((link, index) => (
        <LinkItem
          item={link}
          key={index}
          removeLink={() => removeAlert(link)}
          refreshLinks={props.refreshLinks}
        />
      ))}
      <Modal show={show}>
        <div className="content">
          <div className="text">
            <div className="modalHeader">
              <span>Remove Link</span>
              <img src="cancel.png" onClick={cancelCloseModal} />
            </div>
            <div className="deleteText">
              <p>Do you want to remove:</p>
              <h3>{removeValue.title}</h3>
            </div>
            <div className="buttons">
              <button onClick={okCloseModal}>OK</button>
              <button onClick={cancelCloseModal}>CANCEL</button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default List;
