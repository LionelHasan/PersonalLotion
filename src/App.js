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
          <Route path="/edit/:id" element={<NoteTitle />} />
          <Route path="/" element={<NoteTitle />} />
          <Route path="/note/:id" element={<SavedNote />} />


        </Route>
      </Routes>
    </BrowserRouter>
)
}
export default App;
