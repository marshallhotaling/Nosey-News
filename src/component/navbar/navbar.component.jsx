import './navbar.css'
import searchIcon from "../../icons/search.png"
import { useNavigate } from 'react-router-dom';

const NavBar = ({ search, isHome,}) => {
  const navigate = useNavigate()
  const handleHomeLoad = () => {
    navigate("/");
  };



  return (
    <div className="nav-Wrapper">
      <nav className="navBar">
        <label onClick={handleHomeLoad} className="title">Nosey News</label>
        <img className="searchOption" src={searchIcon} alt={"search"} />
      </nav>
    </div>

  );
};

export default NavBar;