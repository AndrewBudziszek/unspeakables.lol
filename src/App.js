import { Link } from '@material-ui/core'
import './App.css'
import Shuffler from './components/Shuffler'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import React, { useState } from 'react'
import { Twitter } from '@material-ui/icons';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Analytics.record({ name: 'visit' });

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#282c34");
  return (
    <div className="App" style={{
      backgroundColor: backgroundColor
    }}>
      <header className="App-header">
        <Shuffler backgroundColorCallback={setBackgroundColor} />
        <Link href="https://www.buymeacoffee.com/SonBrooks" target="_blank" variant="caption"><FreeBreakfastIcon /></Link>
        <Link href="https://twitter.com/unspeakableslol" target="_blank" variant="caption">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <Twitter />
            <span>Submit requests</span>
          </div>
        </Link>
      </header>
    </div>
  );
}

export default App;