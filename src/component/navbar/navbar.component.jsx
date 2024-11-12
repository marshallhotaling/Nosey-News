import './navbar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = ({ search, isHome, searchManipulation}) => {
  const navigate = useNavigate()
  const handleHomeLoad = () => {
    navigate("/");
  };



  return (
    <div className="nav-Wrapper">
      <nav className="navBar">
        <label onClick={handleHomeLoad} className="title">Nosey News</label>
      </nav>
    </div>

  );
};

export default NavBar;