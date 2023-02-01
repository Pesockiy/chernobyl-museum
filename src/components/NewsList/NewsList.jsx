import React from 'react'
import NewsItem from '../NewsItem'
import PropTypes from 'prop-types'
import ButtonMore from '../../common/ButtonMore'

const NewsList = ({list = []}) => {
  return (
    <div className='news-list'>
      <div className='news-list__inner'>
        {list.map(item => <NewsItem key={item.id} data={item} />)}
      </div>
      <ButtonMore icon='arrow-down' iconSize={42}>Ще новини</ButtonMore>
    </div>
  )
}

NewsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}



export default NewsList