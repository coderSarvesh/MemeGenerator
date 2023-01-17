import './App.css';
import Meme from './Meme';
import Navbar from './Navbar';

function App() {

//   const [theme,setTheme] = useState("light")

//   const updatedTheme = {
//     ...theme,
//     on: !theme.on
// }


  return (
    <div>
      <Navbar />
      <Meme/>
    </div>
  );
}

export default App;
