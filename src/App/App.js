import './App.css';
import { Route,Routes} from "react-router-dom";


function App() {
  
  return (
    <Routes>
      <Route path="/" >
        <Route path="*" element={<h2>Cannot find anything under that route</h2>}/>
      </Route>
    </Routes>
  )
}
export default App;
