import React from 'react'
import PropTypes from "prop-types";

export const PageTitle = ({ children, date }) => {
  return (
    <div className="page-title">
      <div className='page-title__date'>{date}</div>
      <h2 className='page-title__heading'>{children}</h2>
    </div>
    
  )
}

PageTitle.propTypes = {
  children: PropTypes.string,
  date: PropTypes.string
}

export default PageTitle
