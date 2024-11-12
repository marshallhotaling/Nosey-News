import "./home.css";
import NavBar from "../navbar/navbar.component"
import { useNavigate } from 'react-router-dom';
import AllNews from "../allNewsView/allNewsView.component";
const Home = () => {
  const navigate = useNavigate()





  return (
    <div className="mainWrapper">
      <NavBar/>
      <AllNews/>
    </div>

  );
};

export default Home;