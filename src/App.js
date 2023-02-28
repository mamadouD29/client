import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import PostLists from './components/PostLists';
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/posts" element={<PostLists/>} />
      </Routes>
    </div>
  );
}

export default App;
