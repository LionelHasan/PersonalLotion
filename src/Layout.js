import { Link, NavLink, Outlet } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import NoteTitle from "./NoteTitle";
import NotePreview from "./NotePreview";


function Layout() {

  
  const [isClicked, setIsClicked] = useState(false);
  const [button, setButton] = useState(<NavLink to="/note" id="save" onClick={() => button1Click(updateButton)} >Save</NavLink>);




  const button1Click = (updateButton) => {
    updateButton(<NavLink to="/edit" id="edit" onClick={() => button2Click(updateButton)} >Edit</NavLink>);
  };

  const button2Click = (updateButton) => {
    updateButton(<NavLink to="/note" id="save" onClick={() => button1Click(updateButton)} >Save</NavLink>);
  };


  const updateButton = (button) => {
    setIsClicked(!isClicked);
    setButton(button);
  };

  function handleMenuClick() {
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("hidden");

  }



  const sidebarRef = useRef(null);



  return (
    <>
      <div class="entirepage">
        <nav>
          <ul>
            <li id="menu">
              <a id="menubutton" onClick={handleMenuClick}>&#9776;</a>
            </li>

            <li id="title">
              <h1 class="lotion">Lotion</h1>
              <h4 class="subtitle"> Like Notion, but worse.</h4>
            </li>

          </ul>
        </nav>


        <div id="container">
          <div id="sidebar" ref={sidebarRef}>
            <div id="sidebarheader">
              <ul>
                <li><h2 id="sidebartitle">Notes</h2></li>
                <li ><h2 id="newnote">+</h2></li>
              </ul>
            </div>
            <NotePreview button={isClicked} />
          </div>




          <div id="content">

            <Outlet context= {isClicked} />
          </div>
          <div id="NoteTitle">
            <ul>
              <li>              {isClicked ? (
                <NavLink to="/edit" id="edit" onClick={() => button2Click(updateButton)} >Edit</NavLink>
              ) : (
                <NavLink to="/note" id="save" onClick={() => button1Click(updateButton)} >Save</NavLink>
              )}
              </li>
              <li><NavLink id="delete"> Delete</NavLink></li>
              <div>

              </div>


            </ul>
          </div>
        </div>



      </div>


    </>

  );
}

export default Layout;


