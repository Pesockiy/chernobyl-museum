import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from "prop-types";
import cn from 'classnames'
import Dropdown from 'react-dropdown';
import useMedia from '../../hooks/useMedia';

const PageMenu = ({
  menu,
  withSearch = false
}) => {
  const searchInput = useRef(null)
  const requestTimeout = useRef(null)
  const { isMobile } = useMedia()

  const handleChange = () => {
    window.clearTimeout(requestTimeout.current)

    requestTimeout.current = window.setTimeout(() => {
      // search action
      console.log('changed')
    }, 1000)
  }

  const options = menu.map(item => ({
    value: item.filter,
    label: item.title
  }))


  const Links = menu.map(item => {
    const classNames = cn("page-menu__link", {'is-active': item.default})
    return <Link key={item.filter} to={item.filter} className={classNames}>{item.title}</Link>
  })

  return (
    <div className="page-menu">
      {withSearch && (
        <>
          <label htmlFor="search-input" className='page-menu__search-label'>Пошук</label>
          <input id='search-input' className='page-menu__search' ref={searchInput} type="text" onChange={handleChange} placeholder="Почніть писати" />
          <p className='page-menu__search-label'>Тема</p>
        </>
      )}
      {
        isMobile
          ? <Dropdown 
              options={options} 
              value={options[0].value} 
              className="page-menu__dropdown" 
              controlClassName='page-menu__dropdown-control'
              placeholderClassName='page-menu__placeholder'
              menuClassName='page-menu__menu'
              arrowClassName='page-menu__arrow'
            />
          : <div className='page-menu__links'>{ Links }</div>
      }
    </div>
  )
}

PageMenu.propTypes = {
  menu: PropTypes.array,
  withSearch: PropTypes.bool
};

export default PageMenu