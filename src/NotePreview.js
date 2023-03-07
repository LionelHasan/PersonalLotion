import React, { useState, useRef, useEffect } from "react";
import { htmlToText } from "html-to-text";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function NotePreview(prop) {
  const navigate = useNavigate();
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

  function handlePreviewClick() {
    navigate('/edit/'+(count+1));
    console.log("Clicked");
  }


  return (
    <>
      <div className="NotePreview" id = {"NotePreview" + count} onClick = {handlePreviewClick} >
        <h2 className="notepreviewtitle" >{title}</h2>
        <p id="datepreview">{date}</p>
        <p id="textpreview">{plainText.slice(0,20)}</p>
      </div>
    </>
  );
}

export default NotePreview;
