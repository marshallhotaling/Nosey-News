import "./articleView.css"
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const ArticleView = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('state', state)
  }, []);

  if (state) {
    return (
      <div className="mainWrapper">
        <nav className="nav-Wrapper-Closed">
          <label className="title" onClick={() => navigate(`/`)}> Back</label>
        </nav>
        <div className="singleScroolView">
          <label className="articleLabel1">Date : {state.publishedAt}</label>
          <label className="articleLabel2">Source : {state.source.name}</label>
          <label className="articleLabel3">Author : {state.author}</label>
          <img className="singleNewsImg" src={state.urlToImage} alt={""}/>
          <label className="articleLabel4">{state.title}</label>
          <label className="articleLabel5">{state.description}</label>
          <label className="articleLabel6">{state.content}</label>
          <label className="articleLabel7">For More Read Original Article at : <a
            href={state.url}>{state.url}</a></label>
        </div>
      </div>

    )
  } else {
    return (
      <div>
        <label>Sorry No data</label>
        <label onClick={() => navigate("/")}>Return To Main View</label>
      </div>
    )
  }
}

export default ArticleView;