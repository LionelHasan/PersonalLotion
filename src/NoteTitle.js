import { Link, NavLink, Outlet } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import React, { useRef, useEffect, useState } from 'react';
import QuillEditor from "./Quill";
import { useOutletContext } from "react-router-dom";
import MyComponent from "./SavedNote";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";




function NoteTitle() {

  const prop = useOutletContext();
  const { id } = useParams();
  console.log(id);
  const count = id;
  const [dataFromChild, setDataFromChild] = useState('No Text Entered');
  const [inputValue, setInputValue] = useState('Untitled');
  const [inputValue2, setInputValue2] = useState("March 29, 2023 at 8:17 PM");
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };






  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  useEffect(() => {
    var input = document.getElementById('textbox');
    input.focus();
    input.select();
  }, [])

  useEffect(() => {
    const date = formatDate(inputValue2);
    localStorage.setItem('date' + count, date);
  }, [inputValue2]);

  useEffect(() => {
    localStorage.setItem('title' + count, inputValue);
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem('textbox' + count, dataFromChild);
  }, [dataFromChild]);


  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleInputChange2(event) {
    setInputValue2(event.target.value);
  }

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }




  return (
    <>
      <div id="NoteTitle2">
        <ul>
          <li id="firstchild">
            <input id="textbox" type="text" defaultValue="Untitled" value={inputValue} onChange={handleInputChange} />
            <input id="datepicker" type="datetime-local" defaultValue value={inputValue2} onChange={handleInputChange2} />
          </li>
        </ul>
      </div>
      <div class="quilljs">
        <QuillEditor onData={handleDataFromChild} />
      </div>

    </>
  )


}

export default NoteTitle;