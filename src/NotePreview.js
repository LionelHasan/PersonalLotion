import React, { useState, useRef, useEffect } from "react";
import { htmlToText } from "html-to-text";

function NotePreview(prop) {
  console.log(prop.button);
  const [name, setName] = useState(localStorage.getItem('textbox'));
  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [date, setDate] = useState(localStorage.getItem('date'));
  const plainText = htmlToText(name);
  console.log(name);

  

  useEffect(() => {
      setName(localStorage.getItem('textbox'));
      console.log(name);
      const plainText = htmlToText(name);
      setTitle(localStorage.getItem('title'));
      console.log(plainText.substring(20));
      setDate(localStorage.getItem('date'));
  }, [prop.button]);


  return (
    <>
      <div id="NotePreview">
        <h2 className="notepreviewtitle">{title}</h2>
        <p id="datepreview">{date}</p>
        <p id="textpreview">{plainText.substring(20)}</p>
      </div>
    </>
  );
}

export default NotePreview;
