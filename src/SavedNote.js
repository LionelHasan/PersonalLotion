import React from 'react';
import { Markup } from 'interweave';
import { useOutletContext, NavLink } from "react-router-dom";
import NotePreview from './NotePreview';




function SavedNote(props) {
  const name = localStorage.getItem('textbox');
  const title = localStorage.getItem('title');
  const date = localStorage.getItem('date');
  console.log(name);
  console.log(date);

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