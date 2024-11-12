import "./allNews.css"
import {useNavigate} from "react-router-dom";
import NavBar from "../navbar/navbar.component";
import {topHeadlineData} from "../../Data/top-headlines-mock-data";

const AllNews = () => {
  const navigate = useNavigate()





  return (
    <div className="allNewsWapper">
      <div className="scroolView">

      {topHeadlineData.map(({title, publishedAt, urlToImage, url, description  },idx) => (
        <div className="singleNewsCard" onClick={()=> window.location.href = url
        }>
          <img classsName="" src={urlToImage}/>




        </div>

      ))}
      </div>
    </div>

  );
};

export default AllNews;