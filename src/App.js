import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
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
