import { Link, NavLink, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import NoteTitle from "./NoteTitle";


function Layout() {

  function handleMenuClick() {
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("hidden");

  }








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
          <div id="sidebar">
            <div id="sidebarheader">
              <ul>
                <li><h2 id="sidebartitle">Notes</h2></li>
                <li ><h2 id="newnote">+</h2></li>
              </ul>
            </div>
          </div>
          


          
          <div id="content">

            <Outlet />
          </div>
        </div>
      </div>


    </>

  );
}

export default Layout;




