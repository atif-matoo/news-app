import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import category from './data/categories';
import API_KEY from './keys';
import axios from 'axios';
import NavContent from './NavContents/NavContent';

function App() {
  const [category,setCategory]= useState('general');
  const[newsResult,setNewsResult]= useState();
  const[newsArray,setNewsArray] = useState([]);
const[loadmore,setLoadmore] = useState(5);

  const newsAPI= async()=>{
    try{
      const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
      );
      console.log(news.data.articles);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    }

    catch(error){
console.log(error)
    }
  }
  useEffect(()=>{
    newsAPI();
  },[category]);
  return (
    <div className="App">
<Navbar setCategory={setCategory} />
<NavContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}  />
    </div>
  );
}

export default App;
