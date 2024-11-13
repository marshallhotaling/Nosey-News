import './App.css';
import { Route,Routes} from "react-router-dom";
import ArticleView from "../component/articleView/articleView";
import AllNews from "../component/allNewsView/allNewsView.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<AllNews/>} />
        <Route path="/story" element={<ArticleView/>}/>
        <Route path="*" element={<h2>Cannot find anything under that route</h2>}/>
    </Routes>
  )
}

export default App;
