import React, { useState, useRef, useEffect } from "react";
import { htmlToText } from "html-to-text";

function NotePreview(prop) {
  const count = prop.count;
  console.log("Note Preview Count:" + count);
  const [name, setName] = useState(localStorage.getItem('textbox'+count));
  const [title, setTitle] = useState(localStorage.getItem('title'+count));
  const [date, setDate] = useState(localStorage.getItem('date'+count));
  const plainText = htmlToText(name);

  useEffect(() => {
      setName(localStorage.getItem('textbox'+count));
      const plainText = localStorage.getItem('plaintext'+count);
      setTitle(localStorage.getItem('title'+count));
      setDate(localStorage.getItem('date'+count));
  }, [prop.button]);


  return (
    <>
      <div id="NotePreview">
        <h2 className="notepreviewtitle">{title}</h2>
        <p id="datepreview">{date}</p>
        <p id="textpreview">{plainText.slice(0,20)}</p>
      </div>
    </>
  );
}

export default NotePreview;
