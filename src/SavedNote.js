import React from 'react';
import { Markup } from 'interweave';
import { useOutletContext, NavLink } from "react-router-dom";
import NotePreview from './NotePreview';
import { htmlToText } from "html-to-text";
import { useParams } from "react-router-dom";





function SavedNote() {
  const { id } = useParams();
  const prop = useOutletContext();
  const count = id;

  console.log("Save Title Count:" + count);
  const name = localStorage.getItem('textbox'+count);
  const plainText = htmlToText(name);
  localStorage.setItem('plaintext'+count, plainText);
  const title = localStorage.getItem('title'+count);
  const date = localStorage.getItem('date'+count);

  return (
    <>
      <div id="NoteTitle2">
        <ul>
          <li id="firstchild">
          <h2 class ="savednotetitle"> {title}</h2>
          <p> {date}</p>
          </li>
        </ul>
      </div>
      <div id = "savedText">
      <Markup content={name} />
      </div>
    </>
  );
}

export default SavedNote;