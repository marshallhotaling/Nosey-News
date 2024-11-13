import "./allNews.css"
import {
  apiKey,
} from "../../shared/shared";
import searchIcon from "../../icons/search.png";
import {useState, useEffect} from "react";
import axios from "axios";
import {topHeadlineData} from "../../Data/top-headlines-mock-data";

const AllNews = () => {
  const [showSearch,setShowSearch]= useState(true)
  const [mainData, setMainData] = useState([])
  const [viewData, setViewData] = useState([])
  let [allNewsSourcesNames, setAllNewsSourcesNames] = useState([])
  let useMockData = true

  useEffect(() => {
    if (useMockData) {
      setViewData(topHeadlineData.articles)
      setMainData(topHeadlineData.articles)
      if (allNewsSourcesNames.length === 0) {
        getAllNewsSourceNames(topHeadlineData.articles)
      }
    } else {
      const data = axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {});
      data.then((value) => {
        setViewData(value.data.articles)
        setMainData(value.data.articles)
        if (allNewsSourcesNames.length === 0) {
          getAllNewsSourceNames(value.data.articles)
        }
      })
    }
  }, []);


  useEffect(() => {
    // console.log('here')

  }, [viewData]);

  if(showSearch === false){
    return (
      <div className="mainWrapper">
        <nav className="nav-Wrapper-Closed">
          <label className="title">Nosey News closed</label>
          <img className="searchOption" src={searchIcon} onClick={() => {
            setShowSearch(true)
          }} alt={"search"} />
        </nav>
        {mainView()}
      </div>
    );
  }

  if(showSearch === true){
    return (
      <div className="mainWrapper">
        <nav className="nav-Wrapper-Open">
          <label className="title">Nosey News open</label>
          <img className="searchOption" src={searchIcon} onClick={() => {
            setShowSearch(false)
          }} alt={"search"}/>
          <div>
            <select className="newsSourceNamesDropDown" onChange={(value) => searchFor(value.target.value)}>
              <option value={"all"}>Show All</option>
              {allNewsSourcesNames.map(({name}, index) => (
                <option value={name} key={index}>{name}</option>
              ))}
            </select>
          </div>
        </nav>
        {mainView()}
      </div>
    );
  }

  function searchFor(value) {
    if (value === "all") {
      setViewData(mainData)
      return
    }
    let searchMainData = []
    for (let i = 0 ; mainData.length > i; ++i){
      if(value === mainData[i].source.name){
        searchMainData.push(mainData[i])
      }
    }
    setViewData(searchMainData)
  }

  function getAllNewsSourceNames(data) {
    let allNewsSourcesNamesHolder = []
    if (data.length > 0) {
      const holder = []
      allNewsSourcesNames = []
      for (let i = 0; data.length > i; ++i) {
        holder.push(data[i].source.name)
      }
      const uniqueArray = holder.filter(function (item, pos) {
        return holder.indexOf(item) === pos;
      })

      for (let i = 0; uniqueArray.length > i; ++i) {
        allNewsSourcesNamesHolder.push({name: uniqueArray[i]})
      }
      setAllNewsSourcesNames(allNewsSourcesNamesHolder)
    }
  }

  function mainView() {
    return (
      <div className="scroolView">
        {viewData.map(({title, publishedAt, urlToImage, url, description  }, index) => (
          <div className="singleNewsCard" onClick={()=> window.location.href = url} key={index}>
            <img className="singleNewsImg" src={urlToImage} alt={""}/>
            <label className="singleNewsTitle">{title}</label>
            <p className="singleNewsDiscription">{description}</p>
            <label className="singleNewsDate">Published:{publishedAt}</label>
          </div>
        ))}
      </div>
    );
  }
};

export default AllNews;