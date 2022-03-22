import React, { useState } from "react";
import { saveLink, errorLink } from "../../Utils/storage.util";
import "./create.css";

function Create() {
  const [linkName, setLinkName] = useState("");
  const [link, setLink] = useState("");

  const data = {
    title: linkName,
    link: link,
    voteCount: 0,
  };
  const onLinkName = (e) => {
    setLinkName(e.target.value);
  };
  const onLinkUrl = (e) => {
    setLink(e.target.value);
  };
  const onAddClick = () => {
    if (errorLink(data.link) == true) {
      alert("Link URL already exist!");
    } else {
      saveLink(data);
      alert(linkName + " " + "added.");
    }
  };
  return (
    <div className="create">
      <a className="returnList" href="/">
        Return to List
      </a>
      <h1>Add New Link</h1>
      <div className="linkName">
        <p>Link Name:</p>
        <input
          onChange={onLinkName}
          type="text"
          name="name"
          placeholder="e.g. Alphabet"
        />
      </div>
      <div className="linkUrl">
        <p>Link URL:</p>
        <input
          onChange={onLinkUrl}
          type="text"
          name="url"
          placeholder="e.g. http://abc.xyz"
        />
      </div>

      <button className="addButton" type="button" onClick={onAddClick}>
        ADD
      </button>
    </div>
  );
}

export default Create;
