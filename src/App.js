import { Link } from '@material-ui/core'
import './App.css'
import Shuffler from './components/Shuffler'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import React, { useState, useEffect } from 'react'


function App() {
  const [backgroundColor, setBackgroundColor] = useState("#282c34");
  return (
    <div className="App" style={{
      backgroundColor: backgroundColor
    }}>
      <header className="App-header">
        <Shuffler backgroundColorCallback={setBackgroundColor} />
        <Link href="https://www.buymeacoffee.com/SonBrooks" target="_blank" variant="body2"><FreeBreakfastIcon /></Link>
      </header>
    </div>
  );
}

export default App;