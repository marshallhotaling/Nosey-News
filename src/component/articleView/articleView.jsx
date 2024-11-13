import "./articleView.css"
import {useLocation, useNavigate} from "react-router-dom";

const ArticleView = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  //check to make sure there is a state data if not return error view and link to return
  if (state) {
    return (
      <div className="mainWrapper">
        <nav className="nav-Wrapper-Closed">
          <label className="title" onClick={() => navigate(`/`)}> Back</label>
        </nav>
        <div className="singleScroolView">
          <img className="articleImage" src={state.urlToImage} alt={""}/>
          <label className="articleSource"><b>Source : </b>{state.source.name}</label>
          <label className="articleAuthor"><b>Author : </b>{state.author}</label>
          <label className="articleDate"><b>Date : </b>{state.publishedAt}</label>
          <label className="articleTitle">{state.title}</label>
          <label className="articleDescription">{state.description}</label>
          <label className="articleContent">{state.content} <br/><br/> <b>For More Read Original Article at : </b><a
            href={state.url}>{state.url}</a></label>
          <div className="spacer"/>
        </div>
      </div>
    )

  } else {

    return (

      <div>
        <label>Error : Sorry No data</label>
        <label onClick={() => navigate("/")}>Return To Main View</label>
      </div>

    )
  }
}

export default ArticleView;