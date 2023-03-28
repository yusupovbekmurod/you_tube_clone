import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Like from "./Pages/Like/Like";
import SingleVideo from "./Pages/SingleVideo/SingleVideo";
import SearchResult from "./Pages/SearchResult/SearchResult";

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/singlevideo/:videoId" element={<SingleVideo/>}/>
        <Route path="/search/:searchtitle" element={<SearchResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
