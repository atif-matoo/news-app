import { Container } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NavContent.css';
function NavContent({newsArray,newsResult,loadmore,setLoadmore}) {
  console.log(newsResult);
  return (
<Container maxWidth='md'>
<div className='contents'>
    {newsArray?.map((newsItem)=>(
    <NewsCard  newsItem={newsItem} key={newsItem.name}/>

    ))}
    
    {loadmore <= newsResult && (
      <>
      <hr/>
      <button
      onClick={()=>setLoadmore(loadmore+20)}
      className='loadmore'
      >
        Load More
      </button>
      </>
    )}
</div>
</Container>
    )
}

export default NavContent