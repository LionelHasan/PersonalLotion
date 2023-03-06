import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quill from "./Quill";
import Layout from "./Layout";
import Toolbar from "./Toolbar";
import NoteTitle from "./NoteTitle";
import SavedNote from "./SavedNote"



function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/edit" element={<NoteTitle />} />
          <Route path="/" element={<NoteTitle />} />
          <Route path="/note" element={<SavedNote />} />


        </Route>
      </Routes>
    </BrowserRouter>
)
}
export default App;
