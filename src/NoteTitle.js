import { Link, NavLink, Outlet } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import React, { useRef, useEffect, useState } from 'react';
import QuillEditor from "./Quill";
import { useOutletContext } from "react-router-dom";
import MyComponent from "./SavedNote";
import { render } from "@testing-library/react";



function NoteTitle() {

  const prop = useOutletContext();
  





  const [dataFromChild, setDataFromChild] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    localStorage.setItem('title', inputValue);
    const date = formatDate(inputValue2);
    localStorage.setItem('date', date);
    localStorage.setItem('textbox', dataFromChild);
    console.log(localStorage.getItem('textbox'));

  }, [prop]);



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


  function handleInputChange(event) {
    setInputValue(event.target.value);
    localStorage.setItem('title', inputValue);
  }
  function handleInputChange2(event) {
    setInputValue2(event.target.value);
    const date = formatDate(inputValue2);
    localStorage.setItem('date', date);
  }

  function handleDataFromChild(data) {
    setDataFromChild(data);
    localStorage.setItem('textbox', dataFromChild);
  }




  return (
    <>
      <div id="NoteTitle2">
        <ul>
          <li id="firstchild">
            <input id="textbox" type="text" defaultValue="Untitled" value={inputValue} onChange={handleInputChange} />
            <input id="datepicker" type="datetime-local" defaultValue = "March 29, 2023 at 8:17 PM" value={inputValue2} onChange={handleInputChange2} />
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