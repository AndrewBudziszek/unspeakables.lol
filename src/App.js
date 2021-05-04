import { Link } from '@material-ui/core'
import './App.css'
import Shuffler from './components/Shuffler'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shuffler />
        <Link href="https://www.buymeacoffee.com/SonBrooks" target="_blank" variant="body2"><FreeBreakfastIcon /></Link>
      </header>
    </div>
  );
}

export default App;