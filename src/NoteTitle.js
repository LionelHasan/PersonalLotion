import { Link, NavLink, Outlet } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import React, {useEffect, useState} from 'react';
import QuillEditor from "./Quill";
import { useOutletContext } from "react-router-dom";
import MyComponent from "./SavedNote";



function NoteTitle() {

    const [dataFromChild, setDataFromChild] = useState('');


    useEffect(() => {
        var input = document.getElementById('textbox');
        input.focus();
        input.select();

    }, [])

    function handleSaveClickToolbar() {
        const toolbar = document.getElementsByClassName("ql-toolbar ql-snow")[0];
        if (toolbar) {
          toolbar.classList.toggle("hidden");
        }
      }

      function handleDataFromChild(data) {
        setDataFromChild(data);
      }
      function handleDataFromChild2(data2) {
        setDataFromChild(data2);
      }



    return (
        <>
            <div id="NoteTitle">
                <ul>
                    <li id="firstchild">
                        <input id="textbox" type="text" defaultValue="Untitled" />
                        <input id="datepicker" type="datetime-local" />
                    </li>
                    <li><p id="edit" onClick ={handleSaveClickToolbar}>Save</p></li>
                    <li><p id="delete"> Delete</p></li>
                   
                </ul>
            </div>
            <QuillEditor onData={handleDataFromChild} />
            <MyComponent myProp = {dataFromChild} />
            
        </>
    )


}

export default NoteTitle;