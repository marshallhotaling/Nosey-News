import './App.css';
import Home from "../component/home/home.component";
import { Route,Routes} from "react-router-dom";
import ArticleView from "../component/articleView/articleView";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/story" element={<ArticleView/>}/>
        <Route path="*" element={<h2>Cannot find anything under that route</h2>}/>
    </Routes>
  )
}
export default App;
