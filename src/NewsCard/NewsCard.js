import React from 'react'
import './NewsCard.css';
function NewsCard({newsItem}) {
    const fullDate= new Date(newsItem.publishedAt);
    const date = fullDate.toString().split(' ');
const hour = parseInt(date[4].substring(0,2));
const time = hour>12 ? true:false;
console.log(newsItem);
    return (

<div className='card'>
<img className='newsImage'
alt={newsItem.title}
src={
    newsItem.urlToImage ? newsItem.urlToImage : 'https://source.unsplash.com/random'
}
/>
<div className='newsText'>
    <div>
        <span className='title'>{newsItem.title}</span>
        <br />
        <span className='author'>
            <a id= 'ca' href={newsItem.url} target ='_blank'>
                <b>short</b>
            </a>
            <span className='muted'>
                {' '}
                by {newsItem.author ? newsItem.author : 'unknown'} / {' '}
                {
                 time ? `${hour-12}: ${date[4].substring(3,5)} PM` :  `${hour} : ${date[4].substring(3,5)} AM`
                }
                {' '} on {date[2]} {date[1]},{date[0]}
            </span>
        </span>
    </div>
    <div className='lowerText'>
        <div className='description'>{newsItem.description}</div>
        <span className='readmore'>read more at {''}
         <a className='source'  href={newsItem.url} target = '_blank'>
            <b>{newsItem.source.name}</b> 
         </a>
         </span>
    </div>
</div>
</div>    );
}

export default NewsCard;