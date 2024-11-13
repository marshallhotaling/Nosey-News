import "./allNews.css"
import {apiKey,} from "../../shared/shared";
import searchIcon from "../../icons/search.png";
import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {topHeadlineData} from "../../Data/top-headlines-mock-data";

const AllNews = () => {
  const [showSearch,setShowSearch]= useState(false)
  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  let [allNewsSourcesNames, setAllNewsSourcesNames] = useState([])
  const navigate = useNavigate();

  let useMockData = false

  useEffect(() => {
    if (useMockData) {
      //return mock data
      setOriginalData(topHeadlineData.articles)
      setFilteredData(topHeadlineData.articles)
      if (allNewsSourcesNames.length === 0) {
        getAllNewsSourceNames(topHeadlineData.articles)
      }
    } else {
      //return live data
      const data = axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {});
      data.then((value) => {
        setOriginalData(value.data.articles)
        setFilteredData(value.data.articles)
        if (allNewsSourcesNames.length === 0) {
          getAllNewsSourceNames(value.data.articles)
        }
      })
    }
  }, []);

  useEffect(() => {
    // console.log('here')

  }, [filteredData]);

  if(showSearch === false){
    return (
      <div className="mainWrapper">
        <nav className="nav-Wrapper-Closed">
          <label className="title">Nosey News</label>
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
          <label className="title">Nosey News</label>
          <img className="searchOption" src={searchIcon} onClick={() => {
            setShowSearch(false)
          }} alt={"search"}/>
          <div className="selectCenter">
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
    //if selectors show all return all items
    if (value === "all") {
      setFilteredData(originalData)
      return
    }
    //filter selected search item
    let searchMainData = []
    for (let i = 0 ; originalData.length > i; ++i){
      if(value === originalData[i].source.name){
        searchMainData.push(originalData[i])
      }
    }
    setFilteredData(searchMainData)
  }

  function getAllNewsSourceNames(data) {
    let allNewsSourcesNamesHolder = []
    //check that there is data to filter
    if (data.length > 0) {
      const holder = []
      allNewsSourcesNames = []
      // get all source names
      for (let i = 0; data.length > i; ++i) {
        holder.push(data[i].source.name)
      }
      // Filter out duplicates
      const uniqueArray = holder.filter(function (item, pos) {
        return holder.indexOf(item) === pos;
      })
      //format into object types for UI
      for (let i = 0; uniqueArray.length > i; ++i) {
        allNewsSourcesNamesHolder.push({name: uniqueArray[i]})
      }
      setAllNewsSourcesNames(allNewsSourcesNamesHolder)
    }
  }

  function mainView() {
    return (
      <div className="scroolView">
        {filteredData.map(({title, publishedAt, urlToImage, url, description}, index) => (
          <div className="singleNewsCard" onClick={() => {
            navigate(`/story/`, {state: filteredData[index]})
          }} key={index}>
            <img className="singleNewsImg" src={urlToImage} alt={""}/>
            <label className="singleNewsTitle">{title}</label>
            <p className="singleNewsDiscription">{description}</p>
            <label className="singleNewsDate">Published:{publishedAt}</label>
          </div>
        ))}
        <div className="spacer"/>
      </div>
    );
  }
};

export default AllNews;