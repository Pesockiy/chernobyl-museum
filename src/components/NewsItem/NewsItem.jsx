import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../common/Icon/Icon'

const NewsItem = ({ data }) => {
    const { image, title, date, text} = data

    return (
        <div className='news-item'>
            <img className='news-item__image' src={image} alt="news item" />
            <h3 className='news-item__title'>{title}</h3>
            {date && (
                <div className='news-item__date'>
                    <Icon icon='calendar' size={24} classNames='news-item__calendar-icon'></Icon>
                    <span className="news-item__date-text">{date}</span>
                </div>
                
            )}
            <p className="news-item__preview caption">{text}</p>
            <Link to={'/news'} className="news-item__more">
                <span className='heading-3 news-item__more-text'>Читати далі</span> 
                <Icon icon='arrow-left' classNames='news-item__more-icon' color='#0094FF' size={16} />
            </Link>
        </div>
    )
}

export default NewsItem