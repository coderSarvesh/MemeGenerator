import './App.css';
import DarkLight from './DarkLight';
import Meme from './Meme';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {

  const [theme,setTheme] = useState("light")

  const updatedTheme = {
    ...theme,
    on: !theme.on
}


  return (
    <div>
      <Navbar />
      <Meme/>
      {/* <DarkLight
        theme={theme}
      /> */}
    </div>
  );
}

export default App;
