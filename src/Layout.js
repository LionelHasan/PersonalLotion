import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import NoteTitle from "./NoteTitle";
import NotePreview from "./NotePreview";


function Layout() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);


  const [isClicked, setIsClicked] = useState(false);
  



  const button1Click = (updateButton) => {
    const route = "/edit/" + count + 1;
    console.log(route);
    updateButton(<NavLink to={route} id="edit" onClick={() => button2Click(updateButton)} >Edit</NavLink>);
  };

  const button2Click = (updateButton) => {
    const route = "/note/" + count + 1;
    console.log(route);
    updateButton(<NavLink to= {route} id="save" onClick={() => button1Click(updateButton)} >Save</NavLink>);
  };


  const updateButton = () => {
    setIsClicked(previsClicked => !previsClicked);
  };

  function handleMenuClick() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");

  }

  function deleteButton(count) {
    const answer = window.confirm("Are you sure?");
  if (answer) {
    deleteNote(count)
}
  }


  function deleteNote(count) {
    console.log("Note" + count + "was deleted")
    if(localStorage.getItem("textbox"+count)) {
      localStorage.removeItem("textbox"+count);
      localStorage.removeItem("date"+count);
      localStorage.removeItem("title"+count);
      localStorage.removeItem("plaintext"+count);

    }
    
    setCount(prevCount => prevCount -1);
  }

  function handleAddClick() {
    setCount(prevCount => prevCount +1);
    navigate('/edit/'+(count+1));
    updateButton();
  }

  function handleSideBarClick(){
    updateButton();
  }



  const sidebarRef = useRef(null);
  const childComponents = Array.from({ length: count }, (_, index) => (
    <NotePreview key={index} button ={isClicked} count ={index} />
  ));

  const props = { isClicked, count};






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
                <li onClick = {handleAddClick}><h2 id="newnote">+</h2></li>
              </ul>
            </div>
            <div onClick = {handleSideBarClick}>
            <NotePreview button={isClicked} count = {count}/>
            {childComponents}
            </div>
          </div>
          <div id="content">
            <Outlet context= {props} />
          </div>
          <div id="NoteTitle">
            <ul>
              <li>              {isClicked ? (
                <NavLink to={"/edit/" + (count + 1)} id="edit" onClick={() => button2Click(updateButton)} >Edit</NavLink>
              ) : (
                <NavLink to={"/note/" + (count + 1)} id="save" onClick={() => button1Click(updateButton)} >Save</NavLink>
              )}
              </li>
              <li><NavLink id="delete" onClick = {() => deleteButton(count)}> Delete</NavLink></li>
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


