import React from 'react'
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';
import Widgets from './component/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
