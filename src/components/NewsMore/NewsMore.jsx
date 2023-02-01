import React from 'react'
import NewsItem from '../NewsItem'

const NewsMore = ({list}) => {
  return (
    <div className='news-more'>
        <div className="container">
            <div className="news-more__title">ще Новини</div>
            <div className="news-more__list">
              {list.map(item => <NewsItem key={item.id} data={item} />)}
            </div>
        </div>
    </div>
  )
}

export default NewsMore