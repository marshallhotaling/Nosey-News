import "./home.css";
import NavBar from "../navbar/navbar.component"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()





  return (
    <div className="nav-wrapper">
      <NavBar/>

    </div>

  );
};

export default Home;